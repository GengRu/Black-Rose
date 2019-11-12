import Vue from 'vue'
import Alert from './alert.vue'


var alertBtn =  Vue.extend(Alert)

export default function(a,b){
	var newAlertBtn = new alertBtn({
		data(){
			return {
				msg: a.text,
				cb: b
			}
		}
	})
	var el = newAlertBtn.$mount().$el
	
	document.body.appendChild(el)
}