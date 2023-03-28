import type { Ref } from 'vue'
export const useChatMsg = () => {
    // SystemMessage
    const systemMessage: Ref<string> = useState('systemMessage', () => 'You are a helpful assistant.');
    // SystemMessageの更新
    const updateSystemMsg = (systemMsg: Ref<string>) => (value: string) => {
        systemMessage.value = value;
    };
    const userMessage : Ref<Message[]> = useState('userMessage', () => []);
    const addUserMsg = (userMessage: Ref<Message[]>) => (value: Message) => {
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
}
