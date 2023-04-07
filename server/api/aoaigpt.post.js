// 環境変数から値を取得
const runtimeConfig = useRuntimeConfig();
const endpoint = runtimeConfig.aoaiEndpoint;
const deployname = runtimeConfig.aoaiDeployname;
const apiKey = runtimeConfig.aoaiApikey;
const aoaiApiVersion = runtimeConfig.aoaiApiVersion;
const baseUrl = `${endpoint}openai/deployments/${deployname}/chat/completions?api-version=${aoaiApiVersion}`;

console.log(`接続先URL:${baseUrl}`);

/**
 * AOAI の ChatGPTにメッセージを送信する
 */
export default defineEventHandler(async (event) => {

    //const { message } = await readBody(event);

    // メッセージを送信
    try {
        const response = await $fetch(baseUrl, {
            method: 'POST',
            headers: Object.assign(
                { 'Content-Type': 'application/json', 'api-key': apiKey },
                {}
            ),
            body: JSON.stringify(data), 
        });

        console.log(`response:${JSON.stringify( response ,undefined,4)}`);    
        return response;    
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'AOAI接続時にエラーが発生しました',
        });
    }
});

// demo
const data = {
  "messages": [
    {
      "role": "system",
      "content": "You are an AI assistant that helps people find information."
    },
    {
      "role": "user",
      "content": "「Azure OpenAIについて教えてください」この文章を検索エンジンに投げるのに適切なワードに分割してください。分割したキーワードをJSON形式で出力してください。"
    },
    {
      "role": "assistant",
      "content": "キーワード: Azure, OpenAI\nJSON形式:\n```\n{\n  \"keywords\": [\n    \"Azure\",\n    \"OpenAI\"\n  ]\n}\n```"
    },
    {
      "role": "user",
      "content": "https://www.bing.com/ck/a?!&&p=1555f98c649da94bJmltdHM9MTY4MDY1MjgwMCZpZ3VpZD0yMWM5YmJjZS02ZmIwLTYzMjItMTQ1My1hOWQzNmU1YTYyMjMmaW5zaWQ9NTE5Mg&ptn=3&hsh=3&fclid=21c9bbce-6fb0-6322-1453-a9d36e5a6223&psq=azure+openai&u=a1aHR0cHM6Ly9henVyZS5taWNyb3NvZnQuY29tL2phLWpwL3Byb2R1Y3RzL2NvZ25pdGl2ZS1zZXJ2aWNlcy9vcGVuYWktc2VydmljZS8&ntb=1\nこのURLの内容を100文字以内で要約し、最後に出店元としてURLのリンクを教えてください。"
    },
    {
      "role": "assistant",
      "content": "このURLは、AzureのOpenAIに関するページへのリンクです。詳細な情報を提供しています。 (出典元: https://www.bing.com/ck/a?!&&p=1555f98c649da94bJmltdHM9MTY4MDY1MjgwMCZpZ3VpZD0yMWM5YmJjZS02ZmIwLTYzMjItMTQ1My1hOWQzNmU1YTYyMjMmaW5zaWQ9NTE5Mg&ptn=3&hsh=3&fclid=21c9bbce-6fb0-6322-1453-a9d36e5a6223&psq=azure+openai&u=a1aHR0cHM6Ly9henVyZS5taWNyb3NvZnQuY29tL2phLWpwL3Byb2R1Y3RzL2NvZ25pdGl2ZS1zZXJ2aWNlcy9vcGVuYWktc2VydmljZS8&ntb=1)"
    },
    {
      "role": "user",
      "content": "https://blog.jbs.co.jp/entry/2023/02/20/114201\nhttps://appfind.jp/s/183?msclkid=c2c9a243a72c156555d6c66db93393ad\n上記のURLの内容を要約してください。最後に出典元のURLを教えてください。"
    },

  ],
  "temperature": 0.5,
  "top_p": 0.95,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "max_tokens": 800,
  "stop": null,
  "user": "user1",
  "n": 10,
};