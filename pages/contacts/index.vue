<template>
  <section class="section_contacts_container">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Əlaqə</h1>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6" v-for="(contact, index) in contactsAll" :key="index">
          <div class="contacts_card">
            <div class="contacts_card_text">
              <p>
                <span>Ünvan: </span>{{ contact.address }}
              </p>

              <p>
                <span>Tel: </span>{{ contact.phone_number }}
              </p>

              <p>
                <span>Fax: </span>{{ contact.fax }}
              </p>
            </div>

            <LeafletMap
              :ref="'contact-' + index"
              :latitude="contact.latitude"
              :longitude="contact.longitude"
              :address="contact.address"
            />
          </div>
        </div>

        <div class="col-12">
          <div class="section_form_contacts">
            <FormComponent/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LeafletMap from '~/components/LeafletMap'
import FormComponent from "~/components/FormComponent";
import {mapGetters} from "vuex";

export default {
  name: "index",
  components: {
    LeafletMap,
    FormComponent
  },
  computed: {
    ...mapGetters({contactsAll: "module/contacts/getAllContacts"}),
  },
  mounted() {
    console.log(this.contactsAll)
    console.log(this.contactsAll.latitude)
    console.log(this.contactsAll.longitude)
  }
}
</script>

<style scoped>
.section_contacts_container {
  padding: 70px 0;
  background-color: var(--light-mode-bg-color-gray);
}

.section_contacts_container h1 {
  text-align: center;
  color: var(--light-mode-font-color-white);
  margin-bottom: 30px;
}

.section_form_contacts {
  margin-top: 80px;
}

.contacts_card {
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 1px 15px 0 #000;
}

.contacts_card_text {
  margin: 15px 0;
}

.contacts_card p {
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 5px;
  color: var(--grey-font-color);
}

.contacts_card p span {
  font-weight: 600;
  color: var(--light-mode-font-color-white);
}
</style>
