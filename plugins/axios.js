export default function({ $axios, store, redirect }) {
  $axios.onError(error => {
    // error.response.status
    if ( error.response.status === 403) {
      // return redirect("");
    }
    return Promise.reject(error);
  });

  $axios.onRequest(() => {
    // store.dispatch("validation/clearErrors");
  });
}
