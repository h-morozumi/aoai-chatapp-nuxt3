// 環境変数から値を取得
const runtimeConfig = useRuntimeConfig();
const endpoint = runtimeConfig.aoaiEndpoint;
const deployname = runtimeConfig.aoaiDeployname;
const apiKey = runtimeConfig.aoaiApikey;

// Debug log
console.log('環境変数');
console.log(endpoint);
console.log(deployname);
console.log(apiKey);

/**
 * ChatGPTのメッセージ型
 */
interface Message {
  role: string;
  content: string;
}

/**
 * AOAI の ChatGPTにメッセージを送信する
 */
export default defineEventHandler(async (event) => {
  //パラメータを取得
  const body = await readBody(event);
  
  // Systemメッセージ
  const systemMessage:string = body.systemMessage;
  // 過去～今回のユーザメッセージ
  const userMessage:Message[] = body.userMessage;
  // メッセージを組み立て
  var messages:Message[]  = [];
  messages.push({role : 'system',content : systemMessage});
  messages = messages.concat(userMessage);

  // debug log
  console.log('送信予定メッセージの内容');
  console.log(messages);

  //URLを組み立て
  const url = endpoint + 'openai/deployments/' + deployname + '/chat/completions?api-version=2023-03-15-preview';

  // debug log
  console.log('送信先URL');
  console.log(url);

  try {
    const ret = await $fetch(url,{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body : {
        messages : messages
      }
    });

    // Debug log
    console.log('取得データ');
    console.log(ret);

    return ret;
  } catch (error) {
    console.log(error);
    throw new Error('AOAIへの送信に失敗しました。');
  }
});
