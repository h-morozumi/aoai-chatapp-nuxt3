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
        <!-- <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div> -->
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
          <div class="container px-5 py-24 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">

              <UserMsg userMessage="MSG1 : Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer." />
              <SystemMsg 
                systemMessage="MSG1 : Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.\n ``` \n printf(hoge); \n ``` \n"
                :completionTokens=62
                :promptTokens=71
                :totalTokens=1331 />
              <UserMsg userMessage="MSG2 : Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer." />
              <SystemMsg 
                systemMessage="MSG2 : Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.\n ``` \n printf(hoge); \n ``` \n"
                :completionTokens=162
                :promptTokens=171
                :totalTokens=11331 />
              <UserMsg userMessage="MSG3 : Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer." />
              <SystemMsg 
                systemMessage="MSG3 : Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.\n ``` \n printf(hoge); \n ``` \n"
                :completionTokens=262
                :promptTokens=271
                :totalTokens=21331 />
              <UserMsg userMessage="MSG4 : Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer." />
              <SystemMsg 
                :systemMessage="content"
                :completionTokens=362
                :promptTokens=371
                :totalTokens=31331 />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>


</template>
    
<script setup>

const { systemMessage, updateSystemMsg } = useChatMsg();
const assistant = ref(systemMessage.value);
const keyword = ref('');

/**
 * アシスタントの性格を保存
 */
const handleSave = () => {
    updateSystemMsg(assistant.value)
}

/**
 * ChatGPT にメッセージを送信
 */
const handleMessage = () => {
    console.log(`${assistant.value}`);
    console.log(`${keyword.value}`); 
}

// サンプルMarkdown
const content = 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.\n ``` \n printf("hoge"); \n ``` \n';

</script>

<style scoped>
    
</style>