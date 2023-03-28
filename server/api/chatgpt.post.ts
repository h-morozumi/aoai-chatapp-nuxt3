// 環境変数から値を取得
const runtimeConfig = useRuntimeConfig();
const endpoint = runtimeConfig.aoaiEndpoint;
const deployname = runtimeConfig.aoaiDeployname;
const apiKey = runtimeConfig.aoaiApikey;
const baseUrl = `${endpoint}openai/deployments/${deployname}/chat/completions?api-version=2023-03-15-preview`;

// Debug log
console.log('---環境変数---');
console.log(`エンドポイント:${endpoint}`);
console.log(`デプロイ名:${deployname}`);
console.log(`APIキー:${apiKey}`);
console.log(`接続先URL:${baseUrl}`);

/**
 * ChatGPTのメッセージ型
 */
interface Message {
  role: string;
  content: string;
}

const debugLog = (message: string, data?: unknown) => {
  console.log(`${message}:`, data);
};

/**
 * AOAI の ChatGPTにメッセージを送信する
 */
export default defineEventHandler(async (event) => {
  // リクエストボディから必要な情報を取得
  const body = await readBody(event);
  const systemMessage:string = body.systemMessage;
  const userMessage:Message[] = body.userMessage;

  // パラメータバリデーション
  if (!Array.isArray(userMessage)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'userMessage is not an array',
    });
  }

  const messages: Message[] = [
    { role: 'system', content: systemMessage },
    ...userMessage,
  ];

  debugLog('送信予定メッセージの内容', JSON.stringify(messages,undefined,4));

  try {
    const response = await $fetch(baseUrl,{
      method: 'POST',
      headers: Object.assign(
        { 'Content-Type': 'application/json', 'api-key': apiKey },
        {}
      ),
      body: JSON.stringify({ messages }),
    });

    // Debug log
    debugLog('取得データ', JSON.stringify(response,undefined,4));

    //そのまま返す
    return response;
    
  } catch (e) {
    debugLog('エラーが発生しました', e);
    throw createError({
      statusCode: 500,
      statusMessage: 'AOAI接続時にエラーが発生しました',
    })
  }
});
