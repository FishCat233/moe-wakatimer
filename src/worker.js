export default {
  async fetch(request, env) {
    // 1. Wakatime 相关配置 (建议通过 env 变量存储)
    const { searchParams } = new URL(request.url);
    const WAKATIME_API_KEY = env.WAKATIME_API_KEY;
    const WAKATIME_URL = "https://wakatime.com/api/v1/users/current/all_time_since_today";
    const timeType = searchParams.get('time_type') || 'second';
    const theme = searchParams.get('theme') || 'booru-lewd';

    try {
      // 2. 获取 Wakatime 累计时长
      // 注意：Wakatime API Key 需要进行 Base64 编码进行 Basic Auth
      const auth = btoa(WAKATIME_API_KEY);
      const response = await fetch(WAKATIME_URL, {
        headers: { "Authorization": `Basic ${auth}` }
      });
      const data = await response.json();

      console.log(data);

      if (!response.ok) throw new Error('Wakatime API 报错了');

      const totalSeconds = data.data.total_seconds;

      let displayNum;
      // 根据参数进行数学换算
      switch (timeType) {
        case 'second':
          displayNum = Math.floor(totalSeconds);
          break;
        case 'minute':
          displayNum = Math.floor(totalSeconds / 60);
          break;
        case 'hour':
        default:
          displayNum = Math.floor(totalSeconds / 3600);
          break;
      }

      const moeUrl = `https://count.getloli.com/get/@success?theme=${theme}&num=${displayNum}`;

      // 4. 重定向到 Moe Counter 或直接 Fetch 结果返回
      // 推荐 302 重定向，减小 Worker 流量负担
      return Response.redirect(moeUrl, 302);

    } catch (e) {
      // 出错时返回一个保底数字（比如 00000）
      return Response.redirect(`https://count.getloli.com/get/@error?theme=moebooru&num=404`, 302);
    }
  }
};