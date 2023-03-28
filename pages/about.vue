<template>
    <h1>About Page</h1>
    <p>Count:{{ counter }}</p>
    <div>
      {{ data.model }}<br />
      {{ data.choices[0] }}
    </div>
    <div>
      <img src="~/assets/vue.png" alt="Nuxt3 Icon" />
      <img src="/vue.png" alt="Nuxt3 Icon" />
    </div>
</template>

<script setup>
const counter = useCounter();
definePageMeta({
  layout: false,
  middleware: 'auth',
});
  console.log('★★スタート')
  const {systemMessage,systemMsgJson,userMessage} = useChatMsg();

  console.log(systemMessage.value)
  console.log(systemMsgJson);
  console.log(userMessage.value)
  console.log('★★おわり')

// 環境変数のテスト
const runtimeConfig = useRuntimeConfig();
console.log(`aoai_endpoint: ${runtimeConfig.aoaiEndpoint}`);
console.log(`aoai_resourcename: ${runtimeConfig.aoaiDeployname}`);
console.log(`aoaia_pikey: ${runtimeConfig.aoaiApikey}`);

const { data } = useFetch('/api/chatgpt',{
  method:'POST',
  body:{
    'systemMessage': 'You are an AI assistant that helps people find information.',
    'userMessage' : [
    {
      "role": "user",
      "content": "https://ja.wikipedia.org/wiki/ChatGPT　このサイトを要約してください。"
    }
  ]
  }
});

console.log(data.value?.choices[0].message);

</script>