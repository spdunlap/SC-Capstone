import html from "html-literal";

function onGetCardNonce(event) {
  paymentForm.requestCardNonce();
}


export default st => html`
  <head>
  <script src="https://js.braintreegateway.com/web/dropin/1.31.2/js/dropin.min.js"></script>


  </head>

  <section id="pay">
    <h2>Pay</h2>
<body>
  <div id="dropin-container"></div>
  <button id="submit-button">Request payment method</button>
  <script>
    var button = document.querySelector('#submit-button');

    braintree.dropin.create({
      authorization: 'CLIENT_AUTHORIZATION',
      container: '#dropin-container'
    }, function (createErr, instance) {
      button.addEventListener('click', function () {
        instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
          // Submit payload.nonce to your server
        });
      });
    });
  </script>
</body>

  </section>
`;
