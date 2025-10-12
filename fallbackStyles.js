export const fallbackCss = `
  /* Minimal fallback styles so the component is usable even if your CSS is missing */
  .navbar{display:flex;justify-content:space-between;align-items:center;padding:12px 20px;border-bottom:1px solid #eee}
  .navbar .logo a{font-weight:700;font-size:20px;text-decoration:none}
  .details-page{display:flex;flex-wrap:wrap;gap:20px;padding:20px}
  .product-gallery{flex:1 1 380px;min-width:300px}
  .product-info{flex:1 1 360px;min-width:280px}
  .slider-container{position:relative;overflow:hidden;border-radius:8px;border:1px solid #ddd}
  .slider-viewport{width:100%;height:350px;overflow:hidden}
  .slider-track{display:flex;transition:transform 0.5s ease-in-out;height:100%}
  .slider-track img{width:100%;object-fit:cover}
  .slider-nav{display:flex;gap:8px;margin-top:10px}
  .slider-thumb{width:60px;height:60px;overflow:hidden;border-radius:6px;cursor:pointer;border:1px solid #ccc}
  .slider-thumb img{width:100%;height:100%;object-fit:cover}
  .size-options button{margin-right:8px;padding:8px 12px;border-radius:6px;border:1px solid #ddd;background:#fff}
  .size-options button.active{background:#111;color:#fff}
  .quantity-selector{display:flex;align-items:center;gap:8px}
  .qty-btn{padding:6px 10px;cursor:pointer}
  .custom-details textarea{width:100%;min-height:80px;padding:8px;border:1px solid #ddd;border-radius:6px}
  .file-upload input[type=file]{display:block;margin-top:8px}
  .btn.add-to-cart{display:inline-block;padding:10px 14px;border-radius:8px;background:#111;color:#fff;border:none;cursor:pointer;margin-top:10px}
  .modal{position:fixed;inset:0;background:rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center}
  .modal-content{background:#fff;padding:20px;border-radius:8px;max-width:480px;width:90%}
  footer{padding:20px;border-top:1px solid #eee;margin-top:20px}
`;