import { createApp, defineAsyncComponent } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/index';

const BaseButton = defineAsyncComponent(() => import('./components/ui/BaseButton.vue'));
const BaseCard = defineAsyncComponent(() => import('./components/ui/BaseCard.vue'));
const BaseSpinner = defineAsyncComponent(() => import('./components/ui/BaseSpinner.vue'));

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
