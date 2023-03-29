import type { Ref } from 'vue'
export const useChatMsg = () => {
    // SystemMessage
    const systemMessage: Ref<string> = useState('systemMessage', () => 'あなたは親切なアシスタントです。');
    // SystemMessageの更新
    const updateSystemMsg = (systemMsg: Ref<string>) => (value: string) => {
        systemMessage.value = value;
    };
    const userMessage : Ref<Message[]> = useState('userMessage', () => []);
    const addUserMsg = (userMsg: Ref<Message[]>) => (value: Message) => {
        console.log('★')
        userMessage.value.push(value);
    }
    const clearUserMsg = (userMessage: Ref<Message[]>) => () => {
        userMessage.value = [];
    }

    return {
        systemMessage : systemMessage,
        systemMsgJson : {
            role: 'system', content: systemMessage.value
        },
        updateSystemMsg: updateSystemMsg(systemMessage),
        userMessage : userMessage,
        addUserMsg: addUserMsg(userMessage),
        clearUserMsg: clearUserMsg(userMessage),
    }
}


type  Message = {
    role: string;
    content: string;
    completionTokens: number;
    promptTokens: number;
    totalTokens: number;
}
