<template>
<CModal
      title="Confirmation"
      color="danger"
      :show.sync="storeDM.state.confirmModal"
    >
	<FormsConfirm />
   	  <template #footer>
	            <CButton @click="storeDM.commit('changeConfirmModal',{modalState:false})" color="danger"><CIcon name="cil-check-circle"/> Confirm</CButton>
                <CButton @click="storeDM.commit('changeConfirmModal',{modalState:false})" color="secondary"><CIcon name="cil-x-circle"/> Cancel</CButton>
      </template>	
			
    </CModal>
</template>
<script>
	import { storeDM } from '@/views/../redux/store'
	import FormsConfirm from '@/views/userdata/FormsConfirm'
	export default {
	  name: 'ModalConfirm',
	  components: {FormsConfirm},
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