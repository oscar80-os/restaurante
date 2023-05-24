document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores ingresados por el usuario
    var cardNumber = document.getElementById('card-number').value;
    var cardName = document.getElementById('card-name').value;
    var expiryDate = document.getElementById('expiry-date').value;
    var cvv = document.getElementById('cvv').value;
    
    // Validar los datos ingresados (aquí puedes implementar tu lógica de validación)
    if (cardNumber.length !== 16) {
      alert('El número de tarjeta no es válido.');
      return;
    }
    
    // Realizar el procesamiento del pago (aquí puedes enviar los datos a tu servidor, por ejemplo)
    // ...
  
    // Mostrar un mensaje de éxito
    alert('Pago realizado exitosamente.');
    
    // Limpiar el formulario
    document.getElementById('payment-form').reset();
  });
  