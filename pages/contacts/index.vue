<template>
  <section class="section_contacts_container">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ $t('contacts') }}</h1>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6" v-for="(contact, index) in contactsAll" :key="index">
          <div class="contacts_card">
            <div class="contacts_card_text">
              <p>
                <span>{{ $t('address') }} </span>{{ contact.address }}
              </p>

              <p>
                <span>{{ $t('Tel:') }} </span>{{ contact.phone_number }}
              </p>

              <p>
                <span>{{ $t('Fax:') }} </span>{{ contact.fax }}
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

        <div class="col-12" v-if="settingsAll.contact_form === 'true'">
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
  middleware: ["contact-middleware"],
  name: "index",
  components: {
    LeafletMap,
    FormComponent
  },
  computed: {
    ...mapGetters({
      contactsAll: "module/contacts/getAllContacts",
      settingsAll: "module/settings/getAllSettings"
    }),
  },
}
</script>

<style scoped>
.section_contacts_container {
  padding: 70px 0;
}

.section_contacts_container h1 {
  text-align: center;
  color: var(--main-font-color);
  margin-bottom: 30px;
}

.section_form_contacts {
  margin-top: 80px;
}

.contacts_card {
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  transition: 0.5s;
  border: 1px solid  rgba(25,25,28,.2);
}

.contacts_card:hover {
  border: 1px solid  rgba(25,25,28, 1);
}

.contacts_card_text {
  margin: 15px 0;
}

.contacts_card p {
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 5px;
  color: var(--main-font-color);
}

.contacts_card p span {
  font-weight: 600;
  color: var(--main-font-color);
}
</style>
