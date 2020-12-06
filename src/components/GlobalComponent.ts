import { createApp } from 'vue';
import App from '../App.vue';

const app:any = createApp(App);
/**
 * @description 引入ionic 常用组件
 */
import {
	IonListHeader,
	IonLabel,
	IonRadioGroup,
	IonItem,
	IonRadio,
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonBackButton,
	IonButtons,
	IonFooter,
	useIonRouter,
	IonButton,
	IonList,
	IonIcon,
	IonInput
} from '@ionic/vue';

import {Button,Toast} from 'vant'
app.use(Button)
.use(Toast)
/**
 * @desscription 全局组件注册
 */
app.component('IonRadio', IonRadio);
app.component('IonRadioGroup', IonRadioGroup);
app.component('IonItem', IonItem);
app.component('IonLabel', IonLabel);
app.component('IonListHeader', IonListHeader);
app.component('IonPage', IonPage);
app.component('IonHeader', IonHeader);
app.component('IonToolbar', IonToolbar);
app.component('IonTitle', IonTitle);
app.component('IonContent', IonContent);
app.component('IonBackButton', IonBackButton);
app.component('IonButtons', IonButtons);
app.component('IonFooter', IonFooter);
app.component('IonButton', IonButton);
app.component('useIonRouter', useIonRouter);
app.component("IonList",IonList)
app.component("IonIcon",IonIcon)
app.component("IonInput",IonInput);



export default app