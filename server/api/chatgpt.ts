
interface Message {
    role: string;
    content: string;
}
const messageStack: Message[] = [];
messageStack.push({ role: 'system', content: 'You are a helpful assistant.' });


const runtimeConfig = useRuntimeConfig();
const url = runtimeConfig.aoaiurl;
const apiKey = runtimeConfig.aoaiapikey;

const datas = {
    messages: messageStack
};
  


export default defineEventHandler(async (event) => {
  // console.log('run...')
//const body = await readBody(event);
  //   console.log(url)
  //   console.log(apiKey)
    
    messageStack.push({ role: 'user', content: 'こんにちは。' });

    // console.log(datas)
    const ret = await $fetch(url,{
      method : 'POST',
      headers : {
          'Content-Type': 'application/json',
          'api-key': apiKey,
      },
      body : datas,
    })
    console.log(ret)

    // try{
    //   const ret = await useFetch(url, {
    //     method : 'GET',
    //     headers : {
    //         'Content-Type': 'application/json',
    //         'api-key': apiKey,
    //     },
    //     body : datas,
    //   })
    //   console.log('★');
    //   console.log(ret);

    // }catch(e) {
    //   console.log('★★');
    //   console.log(e);
    // }



    // const runtimeConfig = useRuntimeConfig();
    // const env = runtimeConfig.server ? 'Server' : 'Client';
    // console.log(`[${env}] public.foo: ${runtimeConfig.public.foo}`);
    // console.log(`[${env}] secret: ${runtimeConfig.secret}`);
    // console.log(`[${env}] db.user: ${runtimeConfig.db?.user}`);
    // console.log(`[${env}] db.password: ${runtimeConfig.db?.password}`);
  return ret;
});