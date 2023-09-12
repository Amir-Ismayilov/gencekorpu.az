<template>
  <div>
    <section class="section_error">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="erorr_wrapper">
              <img src="../assets/images/background/error.jpg" alt="error_page">
              <h3>We are sorry, the page you've <br>requested is not available!</h3>

              <nuxt-link to="/" class="error_btn">Back To Home Page</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>
.section_error {
  padding: 120px 0;
}

.erorr_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.erorr_wrapper img {
  width: 70%;
  height: 400px;
  object-fit: contain;
  user-select: none;
}

.erorr_wrapper h3 {
  font-family: "Heebo", sans-serif;
  font-size: 36px;
  font-weight: bold;
  line-height: 1.2em;
  color: var(--main-font-color);
  text-align: center;
  margin: 40px 0;
}

.error_btn {
  text-align: center;
  padding: 15px 30px;
  background: var(--main-font-color);
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  transition: 0.5s;
  border-radius: 5px;
  box-shadow: 0px 8px 20px 0px rgba(27, 27, 27, 0.08);
}

.error_btn:hover {
  background: var(--main-font-color);
}

@media screen and (max-width: 767px) {
  .erorr_wrapper h3 {
    font-size: 24px;
  }

  .erorr_wrapper img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
