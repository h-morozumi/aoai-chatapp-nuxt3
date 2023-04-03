<template>
      <v-container>
        <v-row>
          <v-col cols="12" sm="3">
            <v-sheet rounded="lg" min-height="70vh">
              <!--  -->


            </v-sheet>
          </v-col>

          <v-col cols="12" sm="6">
            <v-sheet rounded="lg" min-height="70vh">
              <!--  -->
              <v-container ref="container" class="overflow-y-auto" style="height: 70vh">


                <!-- GPT Message Template -->
                <v-row>
                  <v-col cols="12" sm="2">
                    <v-avatar image="chatgpt-logo.jpg" color="grey lighten-4" size="40">
                    </v-avatar>
                  </v-col>
                  <v-col cols="12" sm="10">
                    <v-card class="mx-auto my-12" elevation="2" max-width="400" color="grey lighten-10">
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
                    <v-card class="mx-auto my-12" elevation="2" max-width="400" color="grey lighten-10">
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
                    <v-card class="mx-auto my-12" elevation="2" max-width="400" color="grey lighten-10">
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
                    <v-card class="mx-auto my-12" elevation="2" max-width="400" color="grey lighten-10">
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
                    <v-card class="mx-auto my-12" elevation="2" max-width="400" color="grey lighten-10">
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

          <v-col cols="12" sm="3">
            <v-sheet rounded="lg" min-height="70vh">
              <!--  -->


            </v-sheet>
          </v-col>
        </v-row>

        <v-container>
          <v-col cols="12" sm="12">
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col>
                    <!-- <v-text-field autofocus label="メッセージ ※Enterでも送信できるよ" v-model="message" clearable @keyup.enter="send_onClick"></v-text-field> -->
                    <v-textarea auto-grow rows="1" prepend-icon="mdi-comment" counter autofocus label="メッセージ" v-model="message" clearable @keyup.enter="send_onClick"></v-textarea>
                  </v-col>
                </v-row>
                <v-btn class="info" small @click="send_onClick">
                  <v-icon>mdi-play</v-icon>送信
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-container>

      </v-container>



</template>

<script setup>
  const message = ref("");
  const messages = ref([]);
  const container = ref('container');

  const send_onClick = async (event) => {
    // ShiftKeyが押されている場合は改行
    if(event.shiftKey){
      console.log("ShiftKey");
      return;
    }
    console.log("send_onClick");
    console.log(`ScrollTop: ${container.value.$el.scrollTop}`);
    console.log(`ScrollHeight: ${container.value.$el.scrollHeight}`);
    // 入力内容をクリア
    message.value = "";
    // チャット欄を最下部にスクロール
    container.value.$el.scrollTop = container.value.$el.scrollHeight;
  }
</script>