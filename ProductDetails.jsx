import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './ProductDetails.css';
import { fallbackCss } from './fallbackStyles';
import sizeGuideImg from './assets/images/sizechart.png';
import productImage1 from './assets/images/5.jpg';
import productImage2 from './assets/images/2.jpg';
import productImage3 from './assets/images/3.jpg';
export default function ProductDetails() {
  useEffect(() => {
    const candidates = [
      'Productcostum.css',
      'Productcustom.css',
      'productcostum.css',
      'ProductCostum.css',
      'productcustom.css'
    ];
    const base = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
    let linkEl = null;
    let styleEl = null;
    const loadFirstAvailable = async () => {
      for (const name of candidates) {
        const url = `${base}/${name}`;
        try {
          const res = await fetch(url, { method: 'HEAD' });
          if (res && res.ok) {
            linkEl = document.createElement('link');
            linkEl.rel = 'stylesheet';
            linkEl.href = url;
            document.head.appendChild(linkEl);
            console.log('Loaded custom CSS:', url);
            return;
          }
        } catch (err) {
          try {
            const res2 = await fetch(url, { method: 'GET' });
            if (res2 && res2.ok) {
              linkEl = document.createElement('link');
              linkEl.rel = 'stylesheet';
              linkEl.href = url;
              document.head.appendChild(linkEl);
              console.log('Loaded custom CSS (GET fallback):', url);
              return;
            }
          } catch (err2) {
          }
        }
      }
      styleEl = document.createElement('style');
      styleEl.setAttribute('data-generated-fallback', 'true');
      styleEl.innerHTML = fallbackCss;
      document.head.appendChild(styleEl);
      console.warn('No custom stylesheet found in public/. A fallback style was injected.');
    };
    loadFirstAvailable();
    return () => {
      if (linkEl && linkEl.parentNode) linkEl.parentNode.removeChild(linkEl);
      if (styleEl && styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
    };
  }, []);

  const images = [ 
    productImage1,
    productImage2,
    productImage3
  ];

  const [index, setIndex] = useState(0);
  const [activeSize, setActiveSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState('');
  const [file, setFile] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  // Base price per item in Rupees
  const basePrice = 400; // costum ammount per t-shirt
  
  // Calculate total price
  const totalPrice = basePrice * quantity;

  // Format number with Indian Rupee symbol and commas
  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  useEffect(() => {
    const applyTransform = () => {
      if (!viewportRef.current || !trackRef.current) return;
      const width = viewportRef.current.clientWidth;
      trackRef.current.style.transform = `translateX(-${index * width}px)`;
    };
    applyTransform();
    const onResize = () => {
      if (!viewportRef.current || !trackRef.current) return;
      trackRef.current.style.transition = 'none';
      applyTransform();
      void trackRef.current.offsetWidth;
      trackRef.current.style.transition = 'transform 0.5s ease-in-out';
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [index]);

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);
  const goto = i => setIndex(i);
  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => Math.max(1, q - 1));
  const onFileChange = e => {
    const f = e.target.files && e.target.files[0];
    if (f) setFile({ file: f, url: URL.createObjectURL(f) });
  };
  const addToCart = () => {
    const cartItem = {
      id: Date.now(),
      title: 'Premium Cotton T-Shirt',
      size: activeSize,
      quantity,
      customText,
      hasFile: !!file,
      price: totalPrice,
      unitPrice: basePrice,
      currency: 'INR'
    };
    try {
      const raw = localStorage.getItem('printify_cart');
      const cart = raw ? JSON.parse(raw) : [];
      cart.push(cartItem);
      localStorage.setItem('printify_cart', JSON.stringify(cart));
      setModalOpen(true);
    } catch (err) {
      console.error('LocalStorage error', err);
      alert('Could not save to cart — check browser storage settings.');
    }
  };

  return (
    <div className="product-details-wrapper">
      <Header />
      
      <main className="details-page">
        <section className="product-gallery">
          <div className="slider-container">
            <div className="slider-viewport" ref={viewportRef}>
              <div className="slider-track" ref={trackRef}>
                {images.map((src, i) => (
                  <div key={i} className="slide">
                    <img src={src} alt={`Product view ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <button className="prev" onClick={prev} aria-label="Previous">&lt;</button>
            <button className="next" onClick={next} aria-label="Next">&gt;</button>
          </div>
          <div className="slider-nav">
            {images.map((t, i) => (
              <div key={i} className={`slider-thumb ${index === i ? 'active' : ''}`} onClick={() => goto(i)}>
                <img src={t} alt={`Thumbnail ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="product-info">
          <h2>Premium Cotton T-Shirt</h2>
          
          {/* Dynamic Price Display in Rupees */}
          
          
          <div className="form-group">
            <label>Select Size:</label>
            <div className="size-guide-container">
              <div className="size-options">
                {['S','M','L','XL','XXL'].map(s => (
                  <button 
                    key={s} 
                    className={s === activeSize ? 'active' : ''} 
                    onClick={() => setActiveSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <a
                href={sizeGuideImg}
                target="_blank"
                rel="noopener noreferrer"
                className="size-guide-link"
              >
                Size Guide
              </a>
            </div>
          </div>

          <div className="form-group">
            <label>Select Color:</label>
            <div className="color-options">
              <span className="color-circle" style={{ background: 'red' }} title="Red"></span>
              <span className="color-circle" style={{ background: 'blue' }} title="Blue"></span>
              <span className="color-circle" style={{ background: 'black' }} title="Black"></span>
              <span className="color-circle" style={{ background: 'green' }} title="Green"></span>
            </div>
          </div>

          <div className="form-group">
            <label>Select Fabric Type:</label>
            <select className="fabric-select">
              <option value="">Select Your Fabric</option>
              <option>Dry Fit</option>
              <option>Dot Net</option>
              <option>Reebok</option>
              <option>Sonata</option>
              <option>Monostrip</option>
              <option>Sahara</option>
              <option>Tringle</option>
            </select>
          </div>

          <div className="form-group">
            <label>Quantity:</label>
            <div className="quantity-selector">
              <button className="qty-btn" onClick={decrement}>-</button>
              <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={e => setQuantity(Math.max(1, Number(e.target.value || 1)))} 
              />
              <button className="qty-btn" onClick={increment}>+</button>
            </div>
          </div>

          <div className="form-group">
            <label>Add Custom Details:</label>
            <div className="custom-details">
              <textarea 
                placeholder="Add any special instructions, text for customization, or other details here..." 
                value={customText} 
                onChange={e => setCustomText(e.target.value.slice(0,500))}
              ></textarea>
              <div className="char-count">{customText.length}/500 characters</div>
            </div>
          </div>
              <div className="price-container">
            <div className="unit-price">{formatPrice(basePrice)} each</div>
            <div className="total-price">Total: {formatPrice(totalPrice)}</div>
            {quantity > 1 && (
              <div className="quantity-breakdown">
                ({quantity} × {formatPrice(basePrice)} = {formatPrice(totalPrice)})
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Upload Your Design:</label>
            <div className="file-upload">
              <label htmlFor="design-upload" className="file-upload-label">
                Choose a file or drag it here
              </label>
              <input id="design-upload" type="file" accept="image/*" onChange={onFileChange} />
              {file && (
                <div className="file-preview">
                  <strong>Preview:</strong>
                  <img src={file.url} alt="preview" />
                </div>
              )}
            </div>
          </div>

          <button className="btn add-to-cart" onClick={addToCart}>
            Contact Us - {formatPrice(totalPrice)}
          </button>
          <a href="/shop" className="back-link">Back to Shop</a>
        </section>
      </main>

      <section className="cta">
        <h2>Customize Your Own Style Today!</h2>
        <a href="/shop" className="cta-btn">Shop Now</a>
      </section>
      
      <Footer />
      
      {modalOpen && (
        <div className="modal" style={{display: 'flex'}} onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Added to Cart</h3>
              <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            </div>
            <p>
              {quantity} {quantity > 1 ? 'items' : 'item'} added to cart - Total: {formatPrice(totalPrice)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}