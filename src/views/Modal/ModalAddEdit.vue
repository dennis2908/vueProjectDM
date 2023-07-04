<template>
<CModal
      :title="storeDM.state.titleModal"
      color="warning"
      :show.sync="storeDM.state.warningModal"
    >
	<FormsUserCreate />
   	  <template #footer>
                <CButton @click="storeDM.commit('changeWarningModal',{modalState:false})" color="secondary"><CIcon name="cil-x-circle"/> Cancel</CButton>
      </template>	
			
    </CModal>
</template>
<script>
	import { storeDM } from '@/views/../redux/store'
	import FormsUserCreate from '@/views/userdata/FormsUserCreate'
	export default {
	  name: 'ModalAddEdit',
	  components: {FormsUserCreate},
	  data(){
	   return {
		  storeDM:storeDM
	      
	   }
	  },
	  methods: {
	    submit(){
		  
		
		} 
	  }
	  
	}
</script>