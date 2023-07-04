<template>
  <CRow>
    <CCol col="12" xl="12">
      <CCard>
        <CCardHeader>
          Users <CButton
      @click="getModalAddForm()"
      color="info"
	  size="sm"> <svg width="14" height="22" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg> Add New User
    </CButton>
        </CCardHeader>
    <ModalAddEdit @open="submit()" ></ModalAddEdit>
	<ModalConfirm @open="submitConfirm()" ></ModalConfirm>
        <CCardBody>
          <CDataTable
            hover
            striped
			:loading="loading"
            :items="items"
            :fields="fields"
            :items-per-page="5"
            :active-page="activePage"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
          >
            <template #index="{item, index}">
              <td>
                <CBadge color="info">
                      {{index+1}}
                   </CBadge>
              </td>
            </template>
			<template #button_td="{item}">
              <td><div v-if="item">
			    <CButton type="submit" @click="getModalEditForm(item)" size="sm" class="mr-2" color="success"> <i class="cis-pencil"></i> <svg width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg> Edit</CButton><CButton type="submit" size="sm" color="danger" @click="getModalConfirm(item)"> <i class="cis-trash"></i> <svg width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg> Delete
					  </CButton>
					  </div>
              </td>
            </template>
			<template #index="{item, index}">
              <td><div v-if="item">
                <CBadge color="info">
                      {{index+1}}
                   </CBadge>
				   </div>
              </td>
            </template>
			<template #username="{item}">
              <td><div v-if="item">
				  <CBadge color="primary">{{primaryBadge(item.username)}}</CBadge>
				  </div>
			  </td>	  
            </template>
			<template #id="{item}">
              <td><div v-if="item">
				  <CBadge color="primary">{{primaryBadge(item.id)}}</CBadge>
				  </div>
			  </td>	  
            </template>
			<template #name="{item}">
              <td><div v-if="item">
				  <CBadge color="primary">{{primaryBadge(item.name)}}</CBadge>
				  </div>
			  </td>	  
            </template>
			<template #password="{item}">
              <td>
			     <div v-if="item">
				  <CBadge color="primary">{{primaryBadge(item.password)}}</CBadge>
				 </div>
			  </td>	  
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import {usersData,fields} from './UsersData'
import ModalAddEdit from '@/views/Modal/ModalAddEdit'
import ModalConfirm from '@/views/Modal/ModalConfirm'
import {primaryBadge,hasWhiteSpace} from '../../genFunctions/genFunctions'
import { storeDM } from '../../redux/store'
import { mapState } from 'vuex'
export default {
  name: 'Users',
  components: {ModalAddEdit,ModalConfirm},
  data () {
    return {
	  warningModal: false,
	  primaryBadge:primaryBadge,
      items: usersData,
	  loading : true,
      fields: fields,
      activePage: 1,
	  hasWhiteSpace:hasWhiteSpace,
	  //store:store,
	  storeDM:storeDM,
	  formData : {
	   username:"",
	   name:"",
	   password:"",
	 },
	 formDataMessage : {
	   username:"",
	   name:"",
	   password:"",
	 }
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page)
        }
      }
    },
	items: function() {
      console.log( this.items) 
    }
  },	
  mounted(){
	this.items = [];
    this.MyfetchData(1);
  },
  methods: {
    MyfetchData(page) {
	fetch("https://sharingvision-backend.herokuapp.com/user/5/"+parseInt(page))
      .then(res => res.json())
      .then(
        (result) => {
		  let Datalist = Array(999999).fill(0)
		  if(result.data.length == 0){
		
		   Datalist = Array(((parseInt(page)-1)*5)+result.data.length+1).fill(0)
		  }
		  else if(result.data.length < 5){
		
		   Datalist = Array(((parseInt(page)-1)*5)+result.data.length).fill(0)
		  }
		  else{
			  let numb = 5*(parseInt(page)-1)
			  
			  let j=0
			  for(var i = numb;i<(numb+5);i++){ 
				 if(result.data[j])
					Datalist[i] = result.data[j]
				 j++
			  }
		  }
		  console.log(Datalist);
		  this.items = Datalist;
		  this.loading = false
	  });	
	
	},
    getBadge (status) {
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    rowClicked (item, index) {
      this.$router.push({path: `/userdata/list/${index + 1}`})
    },
    pageChange (val) {
	  this.loading = true
      this.$router.push({ query: { page: val }})
	  //this.items = [];
	  this.MyfetchData(val);
    },
	submit(){
	  console.log(12312132);
    },
	submitConfirm(){
	  console.log(12312132);
    },
	getModalAddForm(){
	   storeDM.commit('EmptyFormData')
	   storeDM.commit('changeWarningModal',{modalState:true})
	   storeDM.commit('changeTitleModal',{title:"Add New Data"})
	   //store.dispatch({ type: 'CHANGE_STATE', payload: { titleModal:"Add New Data" } })
	
	},
	getModalEditForm(item){
	   storeDM.commit('changeWarningModal',{modalState:true})
	   storeDM.commit('changeFormData',{getData:item})
	   storeDM.commit('changeTitleModal',{title:"Edit Existing Data"})
	   //store.dispatch({ type: 'CHANGE_STATE', payload: { titleModal:"Add New Data" } })
	
	},
	getModalConfirm(item){
	   storeDM.commit('changeConfirmModal',{modalState:true})
	
	},
  },
}
</script>
