<template>
<div>
  <div class="flex flex-row max-h-screen">
    <div class="basis-1/2 m-5">
      <div class="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Playground</h2>
        <p class="leading-relaxed mb-5 text-gray-600">Azure OpenAI ChatGPT を使ったデモアプリケーション</p>
        <div class="relative mb-4">
          <label for="assistant" class="leading-7 text-lg text-gray-600">アシスタント</label>
          <p class="text-xs text-gray-500">モデルの動作と、応答を生成するときに参照する必要があるコンテキストに関する指示をモデルに与えます。アシスタントの性格を説明し、回答すべきことと回答すべきでないことを伝え、回答の形式を説明することができます。このセクションにはトークンの制限はありませんが、すべての API 呼び出しに含まれるため、全体的なトークンの制限に対してカウントされます。</p>
          <textarea id="assistant" name="assistant" v-model="assistant" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-40 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          <button @click="handleSave" class="text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">保存</button>
        </div>
        <div class="relative mb-4">
          <label for="keyword" class="leading-7 text-lg text-gray-600">Message</label>
          <textarea id="keyword" name="keyword" v-model="keyword" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-40 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button @click="handleMessage" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">送信</button>
        <p class="text-xs text-gray-500 mt-3">Azure OpenAI ChatGPTを使ったデモ。現在 gpt-35-turbo (version 0301)にて検証中</p>
      </div>
    </div>

    <div class="basis-1/2 m-5 overflow-scroll bg-slate-50">
      <div>
        <section class="text-gray-600 body-font">
          <div  ref="list" class="container px-5 py-24 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">

              <div v-for="data in userMessage">
                <UserMsg v-if="data.role === 'user'" :userMessage="data.content" />
                <SystemMsg v-if="data.role === 'assistant'" 
                  :systemMessage="data.content" />
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>

</template>
    
<script setup>

const assistant = useState('assistantMsg',() => 'あなたは親切なアシスタントです。');
const keyword = ref('');
const userMessage =  useState('gptResponse',() => []);
const list = ref(null);

watch(assistant, () => {
  console.log('assistantが変更された');
  console.log(assistant.value);
});
watch(keyword, () => {
  console.log('keywordが変更された');
  console.log(keyword.value);
});
watch(userMessage, () => {
  console.log('userMessageが変更された');
  console.log(userMessage.value);
  // // データが変更されたら、自動的にスクロールする
  // console.log(list.value.scrollTop)
  // console.log(list.value.scrollHeight)
  // list.value.scrollTop = list.value.scrollHeight;
});


/**
 * アシスタントの性格を保存
 */
const handleSave = () => {
    const assistantMessage = `${assistant.value}`;
    assistant.value = assistantMessage;
    userMessage.value = [];
    console.log(`assistantMessage:${assistantMessage}`);
    console.log(`userMessage:${userMessage.value}`);
}

/**
 * ChatGPT にメッセージを送信
 */
const handleMessage = async () => {

    const assistantMessage = `${assistant.value}`;
    const inputMessage =`${keyword.value}`;

    userMessage.value.push({role:"user",content:inputMessage});
    keyword.value = '';

    const { data,pending, error } = await useFetch('/api/chatgpt',{
      method:'POST',
      body:{
          'systemMessage': assistantMessage,
          'userMessage' : userMessage,
        }
    });

    if(error.value) {
      console.log('error');
      console.log(error);
      console.log(pending);
      return;
    } else{
      const message = data.value.choices[0].message;
      userMessage.value.push(message)
      // // TODO 別の場所に表示する
      // const usage = JSON.stringify(data.value.usage);
      // console.log(`usage:${usage}`);
    }
   
}

</script>

<style scoped>
    
</style>