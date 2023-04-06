<template>
  <v-container>

    <!-- Navigation -->
    <v-navigation-drawer
        v-model="drawer"
        location="right"
        width="500"
        temporary >

        <v-container>
          <v-card class="mx-auto pa-3">
            <div class="text-caption">アシスタントの性格</div>
            <div>
              <v-textarea clearable label="Label"></v-textarea>
            </div>
            <div>
              <v-btn prepend-icon="mdi-vuetify">保存</v-btn>
            </div>
          </v-card>
          <v-spacer></v-spacer>
          <v-card class="mx-auto pa-3">
            <div>
              <div class="text-caption">Max response(Maximum length)※Tokens</div>
              <v-slider
                v-model="maxTokens"
                :min="1"
                :max="2048"
                step="1"
                thumb-label
                class="w-10/12">
                <template v-slot:append>
                  <p class="text-overline"> {{ maxTokens }} </p>
                </template>
              </v-slider>
            </div>
            <div>
              <div class="text-caption">Temperature</div>
              <v-slider
                v-model="temperature"
                :min="0"
                :max="1"
                step="0.1"
                thumb-label
                class="w-10/12">
                <template v-slot:append>
                  <p class="text-overline"> {{ temperature }} </p>
                </template>
              </v-slider>
            </div>
            <div>
              <div class="text-caption">Top P(Top probabilities)</div>
              <v-slider
                v-model="topP"
                :min="0"
                :max="1"
                step="0.01"
                thumb-label
                class="w-10/12">
                <template v-slot:append>
                  <p class="text-overline"> {{ topP }} </p>
                </template>
              </v-slider>
            </div>
            <div>
              <div class="text-caption">Frequency penalty ※GPT</div>
              <v-slider
                v-model="frequencyPenalty"
                :min="-2.0"
                :max="2.0"
                step="0.1"
                thumb-label
                class="w-10/12">
                <template v-slot:append>
                  <p class="text-overline"> {{ frequencyPenalty }} </p>
                </template>
              </v-slider>
            </div>
            <div>
              <div class="text-caption">Presence penalty</div>
              <v-slider
                v-model="presencePenalty"
                :min="-2.0"
                :max="2.0"
                step="0.1"
                thumb-label
                class="w-10/12">
                <template v-slot:append>
                  <p class="text-overline"> {{ presencePenalty }} </p>
                </template>
              </v-slider>
            </div>
            <div>
              <!-- Stop sequences → テキスト<br /> -->
              <div>
                <v-btn prepend-icon="mdi-vuetify">ディフォルトに戻す</v-btn>
              </div>
            </div>
          </v-card>
        </v-container>
      </v-navigation-drawer>   




    <v-row>
      <v-col>
        <v-sheet min-height="60vh">
          <v-card>
            <v-layout>
              <v-app-bar :elevation="2">
                <!-- <template v-slot:prepend>
                  <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </template> -->
                <v-app-bar-title>Chat GPT Demo</v-app-bar-title>
                <template v-slot:append>
                  <v-btn variant="text" icon="mdi-wrench" @click.stop="config_onClick"></v-btn>
                  <v-btn class="info" icon="mdi-delete"></v-btn>
                </template>
              </v-app-bar>

              <v-main>
                <v-container ref="container" class="overflow-y-auto" style="height: 70vh">
                  <v-row dense>
                    <v-col cols="12">

                      <!-- GPT Message Template-->
                      <v-card>
                        <v-avatar image="chatgpt-logo.jpg" color="grey lighten-4" size="40"></v-avatar>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
                          <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>
                          <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
                        </v-card-actions>
                      </v-card>

                      <!-- User Message Template -->
                      <v-card>
                        <v-avatar color="blue lighten-4" size="40">
                          <v-icon>mdi-account</v-icon>
                        </v-avatar>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </v-card-text>
                      </v-card>

                      <!-- Mock -->
                      <v-card>
                        <v-avatar color="blue lighten-4" size="40">
                          <v-icon>mdi-account</v-icon>
                        </v-avatar>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </v-card-text>
                      </v-card>
                      <v-card>
                        <v-avatar color="blue lighten-4" size="40">
                          <v-icon>mdi-account</v-icon>
                        </v-avatar>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </v-card-text>
                      </v-card>
                      <v-card>
                        <v-avatar color="blue lighten-4" size="40">
                          <v-icon>mdi-account</v-icon>
                        </v-avatar>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </v-card-text>
                      </v-card>
                      <v-card>
                        <v-avatar color="blue lighten-4" size="40">
                          <v-icon>mdi-account</v-icon>
                        </v-avatar>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </v-card-text>
                      </v-card>
                      <v-card>
                        <v-avatar color="blue lighten-4" size="40">
                          <v-icon>mdi-account</v-icon>
                        </v-avatar>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </v-card-text>
                      </v-card>
                      <v-card>
                        <v-avatar color="blue lighten-4" size="40">
                          <v-icon>mdi-account</v-icon>
                        </v-avatar>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </v-card-text>
                      </v-card>
                      <v-card>
                        <v-avatar color="blue lighten-4" size="40">
                          <v-icon>mdi-account</v-icon>
                        </v-avatar>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </v-card-text>
                      </v-card>
                      <v-card>
                        <v-avatar color="blue lighten-4" size="40">
                          <v-icon>mdi-account</v-icon>
                        </v-avatar>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </v-card-text>
                      </v-card>                     

                    </v-col>
                  </v-row>
                </v-container>
              </v-main>

            </v-layout>
          </v-card>
          
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col sm="11">
                <v-textarea auto-grow rows="1" prepend-icon="mdi-comment" counter autofocus label="Message (Shift-Enter for New Line)" v-model="message" clearable="true" @keyup.enter="send_onClick"></v-textarea>
              </v-col>
              <v-col sm="1">
                <v-btn class="info" @click="send_onClick">
                  <v-icon>mdi-play</v-icon>
                  <p>Send</p>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

  </v-container>

</template>

<script setup>

const message = ref("");
const messages = ref([]);
const container = ref('container');

const drawer = useState('gptResponse',() => false);
const config_onClick = () => {
   drawer.value = !drawer.value;
 }

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

const maxTokens = ref(800);
const temperature = ref(0.8);
const topP = ref(0.95);
const frequencyPenalty = ref(0);
const presencePenalty = ref(0);
</script>

