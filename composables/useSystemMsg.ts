import type { Ref } from 'vue'
export const useSystemMsg = () => {
    // SystemMessage
    const systemMessage: Ref<string> = useState('systemMessage', () => 'あなたは親切なアシスタントです。');
    // SystemMessageの更新
    const updateSystemMsg = (systemMsg: Ref<string>) => (value: string) => {
        systemMessage.value = value;
    };

    return {
        systemMessage : systemMessage,
        systemMsgJson : {
            role: 'system', content: systemMessage.value
        },
        updateSystemMsg: updateSystemMsg(systemMessage),
    }
}
