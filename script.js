body{
font-family:Arial;
background:#0d0018;
color:white;
margin:0;
}

header{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
background:#140020;
}

.products{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:20px;
padding:20px;
}

.product{
background:#140020;
padding:10px;
border-radius:10px;
}

button{
padding:10px;
border:none;
border-radius:6px;
cursor:pointer;
}

.cart{
position:fixed;
right:-400px;
top:0;
width:400px;
height:100%;
background:#1b0030;
padding:20px;
transition:.3s;
}

.cart.open{
right:0;
}

.login{
max-width:300px;
margin:100px auto;
display:flex;
flex-direction:column;
gap:10px;
}

input{
padding:10px;
border-radius:6px;
border:none;
}
