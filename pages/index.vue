<template>
  <v-container>
    <v-row>

      <v-navigation-drawer
        v-model="drawer"
        location="right"
        width="500"
        temporary>

        <v-container>
          <div>アシスタント設定(サンプル)</div>
          <div>
            <v-select label="Select" 
              :items="[
                'シェイクスピア・ライティングアシスタント',
                'IRS税務チャットボット', 
                'マーケティング・ライティング・アシスタント', 
                'XBoxカスタマーサポートエージェント', 
                'ハイキングの注意事項チャットボット', 
                'JSONフォーマッターアシスタント']">
            </v-select>
          </div>
          <div>
            アシスタントの性格
          </div>
          <div>
            <v-textarea clearable label="Label"></v-textarea>
          </div>
          <div>
            <v-btn prepend-icon="mdi-vuetify">保存</v-btn>
          </div>
        </v-container>

      </v-navigation-drawer>   
      
      <v-col>
        <v-sheet rounded="lg" min-height="70vh">
          
          <!-- チャット表示欄 -->
          <v-container ref="container" class="overflow-y-auto" style="height: 70vh">


            <!-- GPT Message Template -->
            <v-row>
              <v-col cols="12" sm="2">
                <v-avatar image="chatgpt-logo.jpg" color="grey lighten-4" size="40">
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="10">
                <v-card class="mx-auto my-12" elevation="2" color="grey lighten-10">
                  <v-card-text>
                    Hello World.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <!-- Message Template -->

            <!-- User Message Template -->
            <v-row>
              <v-col cols="12" sm="2">
                <v-avatar color="blue lighten-4" size="40">
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="10">
                <v-card class="mx-auto my-12" elevation="2" color="grey lighten-10">
                  <v-card-text>
                    Hello World.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <!-- Message Template -->
            <!-- Message Template -->
            <v-row>
              <v-col cols="12" sm="2">
                <v-avatar color="grey lighten-4" size="40">
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="10">
                <v-card class="mx-auto my-12" elevation="2" color="grey lighten-10">
                  <v-card-text>
                    Hello World.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <!-- Message Template -->

            <!-- Message Template -->
            <v-row>
              <v-col cols="12" sm="2">
                <v-avatar color="blue lighten-4" size="40">
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="10">
                <v-card class="mx-auto my-12" elevation="2" color="grey lighten-10">
                  <v-card-text>
                    Hello World.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <!-- Message Template -->

            <!-- Message Template -->
            <v-row>
              <v-col cols="12" sm="2">
                <v-avatar color="grey lighten-4" size="40">
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="10">
                <v-card class="mx-auto my-12" elevation="2" color="grey lighten-10">
                  <v-card-text>
                    Hello World.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <!-- Message Template -->

          </v-container>




        </v-sheet>
      </v-col>

      <v-container>
        <v-col cols="12" sm="12">
          <v-card>
            <v-card-text>
              <v-row>
                <v-col sm="11">
                  <v-textarea auto-grow rows="1" prepend-icon="mdi-comment" counter autofocus label="メッセージ(改行の場合はShift-Enter)" v-model="message" clearable @keyup.enter="send_onClick"></v-textarea>
                </v-col>
                <v-col sm="1">
                  <v-btn class="info" small @click="send_onClick">
                    <v-icon>mdi-play</v-icon>送信
                  </v-btn>
                </v-col>

              </v-row>
              <v-btn class="info">
                <v-icon>mdi-delete</v-icon>チャットクリア
              </v-btn>

            </v-card-text>
          </v-card>
        </v-col>
      </v-container>

    </v-row>

  </v-container>



</template>

<script setup>

const message = ref("");
const messages = ref([]);
const container = ref('container');

const drawer = useState('gptResponse');

const send_onClick = async (event) => {
// ShiftKeyが押されている場合は改行
if(event.shiftKey){
  return;
}

// 入力内容をクリア
message.value = "";
// チャット欄を最下部にスクロール
container.value.$el.scrollTop = container.value.$el.scrollHeight;
}
</script>