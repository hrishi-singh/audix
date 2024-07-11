import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style/bookdetails.css";
const BookDescription = () => {
  const param = useParams();
  const [detail, setDetail] = useState([]);
  const [reviewFlag, setReviewFlag] = useState(false);
  const [comment, setComment] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [rating, setRating] = useState(0);
  const getDetail = async () => {
    const res = await axios.get(`https://audixx.vercel.app/audiobooks/${param.id}`);
    setDetail(res.data);
    if (
      typeof res.data.reviews !== "undefined" &&
      res.data.reviews.length !== 0
    ) {
      setReviewFlag(true);
    }
  };
  useEffect(() => {
    getDetail();
  }, []);

  const submitHandler = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`https://audixx.vercel.app/audiobooks/${param.id}/reviews`, { name:reviewer,rating:rating,comment:comment }).then(()=>{
        alert("Review Submitted Successfully !")
        getDetail();
        setReviewer('');
        setComment('');
        setRating(0)
      });
      
      
    } catch (error) {
      console.log("SubmitHandler",error);
    }
    
  };
  console.log(reviewer);

  return (
    <div id="detail-container">
      <div className="__detail-box">
        <div className="__desc-img-box">
          <img src={detail.cover} alt="" />
        </div>
        <div className="__desc-box">
          <h2 className="__desc-book-title">{detail.title}</h2>
          <div className="__desc_peek-info">
            <div className="__peek-author __peek-subinfo">
              <svg
                width="35"
                height="55"
                viewBox="0 0 35 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="35" height="54.8113" fill="url(#pattern0_16_26)" />
                <defs>
                  <pattern
                    id="pattern0_16_26"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_16_26"
                      transform="matrix(0.0111111 0 0 0.00709505 0 0.180723)"
                    />
                  </pattern>
                  <image
                    id="image0_16_26"
                    width="90"
                    height="90"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8UlEQVR4nO2cPWsUYRRG10IQrSQptNIYFNFGJKJiFAJpxC6ohYXYRMU/ICJorEVREYNoobUfhYLof9BW8RM7sbCKBokkR14ZIYnLZLNz753x3efAlsmc5+ywCTuz22oJIYQQQgghhBBCiD8A64EzwA3gdqaPG8XGdeFPO7ACOAdM0ztMA2fT9sjQV+hdLkdFPlD30gYwEhH6Ud0rG8CDiNBf617ZAL5EhJ6te2UDmI0ILQCFDkKhg1DoIBQ6CIUOQqGDUOggcgz9DbgFHAQGgDXAamAncBWYqcEpu9B3gb4lfEaAn8FeWYW+uAynQ8AdYCpKLpfQT7t02wC8jxC0L/vvGG9+pWAV/IaAOW9J26rth3jzxMDxmbekTc3yEd6MGziOe0va1Cwf4c0OA8c93pI2NctHeNNn4Jj+KLpiU7N8hDcrDRxXeUva1Cwf4c1aA8c+b0mbmuUjvNlr4LjbW9KmZvkIby4YOJ73lrSpWT7Cm0kDx0lvSZua5SO82WTgOOgtaVOzfIQ3gwaOCt0Bxw1Cn8CZqo6djPDmbXqDv4JfujjwzlvStmr7IRG8qeCXnih3bKu2HxLFti7ctkfJ+dRdOCaKh124PY6S86m7cEwkx5bhdTRSLLfQU8BwB077ge+RYrmFTkx04DRBMAodhEIHkWPo0Q6cRqOlcgo918nr8zyvSxG3Gfwlh9CfgevdXKRNPwNcK36HKz51F47xuGHmBXAa2GLouRk4BTwvjmGKlWfZACt+FP+W9Qc49xfHSsc04X8J/Tqdce6y7c/ydOzKRMhW5UPEWbzE2f0p99Cz6SZEd8mlN+yq+gngCMkq3Gs1BOB+zqGHWg2huL0329DZoNBBKHQQCh2EQgeh0EEodBAKHYRCZxS6lg+5N4yZiNCV3/nKgI8RodNXOvQ6NyNCD/TYt+wuJl2l2egeuoh9pEdfq2eAwyGR58UeBl7RO7wE9oVGXhR8KzAGnMz0MZY21hZYCCGEEEIIIYQQrWXwG+GwOykX/sjhAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
              <p>{detail.author}</p>
            </div>
            <div className="__peek-rating __peek-subinfo">
            <svg width="96" height="91" viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 3.90594L59.8402 32.3732L60.192 33.2191L61.1053 33.2923L91.8381 35.7561L68.4229 55.8137L67.7271 56.4097L67.9397 57.3009L75.0934 87.2909L48.7819 71.2199L48 70.7423L47.2181 71.2199L20.9066 87.2909L28.0603 57.3009L28.2729 56.4097L27.5771 55.8137L4.16194 35.7561L34.8947 33.2923L35.808 33.2191L36.1598 32.3732L48 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
</svg>

              <p>{(detail.rating) && (detail.rating).toFixed(2)}</p>
            </div>
            <div className="__peek-sales __peek-subinfo">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="35" height="35" fill="url(#pattern0_16_32)"/>
<defs>
<pattern id="pattern0_16_32" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_16_32" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_16_32" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEWklEQVR4nO2cyWsUQRSHS+O+geJBVHA568UFl6jgSfSkIiK4bydNouAf4EExrqAIehY8uoIEFzwaxUPUu+IublFJ3HD5pEwdRLp6Saq6q7vfBwNhZjLv935dU/Oq6s0oJQiCIAiCIAiCIAiCIHgDaABmAluBg8BF4AHwEOgEvptbp7lPP3bBPHeL+d8GuUQRABOAZuAS8JG+88FcoCZgvKozwBBgLXAV+Ik/9Gu3mViDVV0AhgMtwHPy5zWwFxilqgowANgNvKN43pqLPUBVCWAWcJfwuAfMV2UHGAQcB35nNKDLzKv7gQ3AHGAqMNq85iDz91Tz2EbzXP0/3RljaW3H9GuqMmJMyDKKXwCH9Qjry1saGAg0AkeAlxni3wEmqzIBLDYlVhquAUt81L6mJl8K3EipRdfmi1QZAFYC31Ik1QbMzlHXXFNKJvEVWK5CBticoiZ+CqwoUOMq4FmCRp3DJhXwSE4y+QwwIgCtI4GzKcxeHuKcrN9yNr7o0a4CA9iWoPtrMHO2qS4+JHzANKpAARam0F9sNWLq2bsJJds0FTjA9IRS8LYuG4sUeDxhJARv8n9mx43so6oIgAUxK74vIU8XCdOIbc7+pUtEVcAGkd4nsBFmaZQCYHtMXg9y3Ygyu3A2zqiSQ3zp15SXiBExW51PQqiTHdXZtkXNG2BYHiL2xFztwlZ8rgFWx+S5K4/jJ1sZ1KYqBnDdkutzr8diwLqYqzxPVQx69rptrPEZ2Lb7dU1VFOCmJecrPlsCbJtGS1RFAZZZcv4BjPMRUB9m2pbZlW1YoWfN8MqS+w4fAS9bgh1SFYeeM8Uozvk4ErLtA5T/FDnd0jyK90B/5bhdwHZaXdyuVr67lLbT9RkuA+nmwVrUzr2ouNzt6+h52BJkn6oJwAGLBwdcBtFdnlGsVzUB2GTx4LzLIPctQeaomgDMs3jQ4TLIY0uQSaomAFMsHjxyGUSXMVGMUTUBGGvx4K3LIPqrDFGUszGwF+jdOosH31wGiUTVDHz7IEb3IEbX1WizZD0YcRrTbZpRmov44o45IWoxvdDdEbuQrXGfOyEarQUncQ+Y6Exkcg4TY9YD/9JaJqP16CCl2YOdCY0fyWlM1rwok9FZaHImNPuhhZO8ymJ0uzOhdj16Tq690V05GK33zWtvNDkYnYmsr+NdqO/EXOFKj3f9rgR5F+pZj3f9rgR5F+pZj3f9rgR5F+pZj3f9rgR5F+pZj3f9lp6OTt+JBWh0Jh96I/RkRIATvhML0OhMPvRG6FDgNPDZ3E7p+3wnFqDRmXzoi+B++pZXYq5wrSetD96putHBEFpiBKansokRmJ7KJkZgeiqbGIHpcUbGvD6VZT+67Ea3l+WEpexG78xBT3NVjU57Ct6RR/+e6ZuL+zWGVKfgwZGyr6NDf3cx576ONGa76+D3jelUao0Y2V3ALT1dFNGJaka2/k3p9ogPyMROJUEQBEEQBEEQBEEQBEH95Q81xj78fwMNiQAAAABJRU5ErkJggg=="/>
</defs>
</svg>

              <p>{detail.sales}</p>
            </div>
            <div className="__peek-release __peek-subinfo">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="35" height="35" fill="url(#pattern0_16_34)"/>
<defs>
<pattern id="pattern0_16_34" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_16_34" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_16_34" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEIUlEQVR4nO2cXW8OQRTHN1XFNW31ISFxV4nEVb19BRetz+G1tBIJok17g0jwEVqtaEgk4o668XKD8AlIlHBBKKrVH5OO5NHszLOzz+48O7vnl+zNdubMnv+zPWfmZHaiSBAEQRAEQRAEQRAEQYiA9cBR4CnwjfLyDXgCHAHWef3pga3AS6rHC+W7zze5iiLXi53/m63DRdU57ENoFZOrzmMfQn9ttZcF4KsPoWOJSgqt8leEXkGEzhgMlHfgFiFCe0KE9oQI7QkR2hMitCdEaE+I0J4QoasqdNWIRGg/iNCeEKE9IUJ7QoT2hAjtCRHaEyK0J0ISegEYAmr6Gtb3gmgfktDDMbaHQ2kf5Q3Z0RNje3Mo7aO8ITtqMba3hNI+yhuyYzjG9ulQ2kd5Q3Ys6BjokqwK0z4koYNGhPaECO0JEdoTIrQnRGh/3AC2tWLWUahahCd+AOeBdp9CF6oW4ZmHcUv4vISOW8LWWtjeN++AnSJ0PEvAA+AY0Ad0AWv11aXvHddtVNtGvAd6836jC1WLSPDZ8Siw0cHvjbrPfAPbc6oYlVLe/wYMohZhYcIWT4G2Bv6rsSdtAwCPmk6QhMsSMGjxawNwDfisr6vqnqX9yQbhZKSKQi8B/Q38uhLT73KDPgMWsdV/246qCT2YwC+VyFbzIUE/Nbc3MV0loSea8Sth3ylD9+XUUz7C4nvS8zVMBhL2rVlmIxerIPSFZv1y6D9mMPFBzcvLXOtYdJwnx+LQv9OSGPeXudbxIAu/HG3Mpk3GIdc6jmXhl6ONEwYzt1zsWB+oaPsugL4s/HK0sc9g5rmLndBqHZ0Z+ZX4oCqg22DjjcuzhFbr6MjIr3tJxVbtDDbmsxS6aHRk6Nd9dQxdE0L/LLPQnY5+qTeXZt5sS+j4WGah9zj6tS6B2HdsZVRLMnxd5uPYjqfwLYnYBy39Bw19Zsp8wOBDZ+eSiX3G0lcV/OM4m+ZB1KmzIbAIbMpB7P4US/ADaR9CHYQaAqNphK7zU8Xkeu4Cawztxw3P8ClVUanuWOMQxJ6PW1E6+NmmYrIKF+pNtoi8RZdk47iedvz6X/ywOhC14AlysilHk2kxbSn874rKBCt74UyczHFcWwXxdlQ2gG16L1wcKkkN5DDmIeC3YcyFzDbTFA1WNhxiEftUhmMNWURWjEdlBWjXGw5tTDWzk0gnPlNM/scz11pLcAA9esNho9nImEs9RM+Txy2zi/otYdujKgDsNOzTiAsns3rpvFcXhTr01a3vDeo2STY5fgF2R1UC6NVvly/mKifyqnhqqj9kybPKhIsGCXIkp88wfum4Xe7E54LacAjc1Ku1ZlnWdZByzpMzTJSXEibLuALRtdItq6Mc0Z9P7NezihldJHurp28qzChRX+m/nVOlztRVuL8D/gHNMSJJwDMlLgAAAABJRU5ErkJggg=="/>
</defs>
</svg>

              <p>{detail.published_date}</p>
            </div>
          </div>
          <div className="__desc-content">
            <p>{detail.description}</p>
          </div>
          <div className="__review-btn __view-btn">
            <p>Write your Review</p>
          </div>
        </div>
      </div>

      {reviewFlag && (
        <section className="__reviews-container">
          <h5>Reviews</h5>
          <div className="__reviews-card">

{detail.reviews.map((det) => {
  return (
    <div className="__reviews">
      <p>{det.name}</p><hr/>
      <div className="__review">
     <p>
      {
        (det.rating===1)?<svg width="700" height="100" viewBox="0 0 700 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 3.90594L61.8402 32.3732L62.192 33.2191L63.1053 33.2923L93.8381 35.7561L70.4229 55.8137L69.7271 56.4097L69.9397 57.3009L77.0934 87.2909L50.7819 71.2199L50 70.7423L49.2181 71.2199L22.9066 87.2909L30.0603 57.3009L30.2729 56.4097L29.5771 55.8137L6.16194 35.7561L36.8947 33.2923L37.808 33.2191L38.1598 32.3732L50 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M200 0L213.225 31.7971L247.553 34.5491L221.399 56.9529L229.389 90.4509L200 72.5L170.611 90.4509L178.601 56.9529L152.447 34.5491L186.775 31.7971L200 0Z" fill="#D4D4D4"/>
        <path d="M350 0L363.225 31.7971L397.553 34.5491L371.399 56.9529L379.389 90.4509L350 72.5L320.611 90.4509L328.601 56.9529L302.447 34.5491L336.775 31.7971L350 0Z" fill="#D4D4D4"/>
        <path d="M500 0L513.225 31.7971L547.553 34.5491L521.399 56.9529L529.389 90.4509L500 72.5L470.611 90.4509L478.601 56.9529L452.447 34.5491L486.775 31.7971L500 0Z" fill="#D4D4D4"/>
        <path d="M650 0L663.225 31.7971L697.553 34.5491L671.399 56.9529L679.389 90.4509L650 72.5L620.611 90.4509L628.601 56.9529L602.447 34.5491L636.775 31.7971L650 0Z" fill="#D4D4D4"/>
        </svg>
        :
        (det.rating===2)?<svg width="700" height="100" viewBox="0 0 700 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 3.90594L61.8402 32.3732L62.192 33.2191L63.1053 33.2923L93.8381 35.7561L70.4229 55.8137L69.7271 56.4097L69.9397 57.3009L77.0934 87.2909L50.7819 71.2199L50 70.7423L49.2181 71.2199L22.9066 87.2909L30.0603 57.3009L30.2729 56.4097L29.5771 55.8137L6.16194 35.7561L36.8947 33.2923L37.808 33.2191L38.1598 32.3732L50 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M200 3.90594L211.84 32.3732L212.192 33.2191L213.105 33.2923L243.838 35.7561L220.423 55.8137L219.727 56.4097L219.94 57.3009L227.093 87.2909L200.782 71.2199L200 70.7423L199.218 71.2199L172.907 87.2909L180.06 57.3009L180.273 56.4097L179.577 55.8137L156.162 35.7561L186.895 33.2923L187.808 33.2191L188.16 32.3732L200 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M350 0L363.225 31.7971L397.553 34.5491L371.399 56.9529L379.389 90.4509L350 72.5L320.611 90.4509L328.601 56.9529L302.447 34.5491L336.775 31.7971L350 0Z" fill="#D4D4D4"/>
        <path d="M500 0L513.225 31.7971L547.553 34.5491L521.399 56.9529L529.389 90.4509L500 72.5L470.611 90.4509L478.601 56.9529L452.447 34.5491L486.775 31.7971L500 0Z" fill="#D4D4D4"/>
        <path d="M650 0L663.225 31.7971L697.553 34.5491L671.399 56.9529L679.389 90.4509L650 72.5L620.611 90.4509L628.601 56.9529L602.447 34.5491L636.775 31.7971L650 0Z" fill="#D4D4D4"/>
        </svg>
        :
        (det.rating===3)?<svg width="278" height="42" viewBox="0 0 278 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9346 4.87952L23.7052 14.4436L24.0467 15.3097L24.9743 15.3881L34.941 16.2311L27.2878 23.1473L26.637 23.7354L26.8305 24.591L29.1424 34.816L20.7471 29.4063L19.9346 28.8827L19.1221 29.4063L10.7268 34.816L13.0388 24.591L13.2322 23.7354L12.5814 23.1473L4.9282 16.2311L14.8949 15.3881L15.8225 15.3097L16.164 14.4436L19.9346 4.87952Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M79.7887 4.76914L83.732 14.4589L84.0797 15.3131L84.9989 15.3884L95.3089 16.2332L87.4292 23.1316L86.7519 23.7245L86.9565 24.6011L89.3531 34.8694L80.583 29.3948L79.7887 28.8989L78.9944 29.3948L70.2242 34.8694L72.6208 24.6011L72.8254 23.7245L72.1481 23.1316L64.2684 16.2332L74.5784 15.3884L75.4976 15.3131L75.8453 14.4589L79.7887 4.76914Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M139.013 4.76914L142.956 14.4589L143.304 15.3131L144.223 15.3884L154.533 16.2332L146.653 23.1316L145.976 23.7245L146.18 24.6011L148.577 34.8694L139.807 29.3948L139.013 28.8989L138.218 29.3948L129.448 34.8694L131.845 24.6011L132.049 23.7245L131.372 23.1316L123.492 16.2332L133.802 15.3884L134.721 15.3131L135.069 14.4589L139.013 4.76914Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M198.236 0.789795L203.569 13.8935L217.411 15.0276L206.865 24.2602L210.087 38.0648L198.236 30.6672L186.386 38.0648L189.608 24.2602L179.062 15.0276L192.904 13.8935L198.236 0.789795Z" fill="#D4D4D4"/>
        <path d="M258.09 0.789795L263.257 13.8935L276.666 15.0276L266.449 24.2602L269.571 38.0648L258.09 30.6672L246.61 38.0648L249.732 24.2602L239.515 15.0276L252.924 13.8935L258.09 0.789795Z" fill="#D4D4D4"/>
        </svg>
        :
        (det.rating===4)?<svg width="700" height="100" viewBox="0 0 700 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 3.90594L61.8402 32.3732L62.192 33.2191L63.1053 33.2923L93.8381 35.7561L70.4229 55.8137L69.7271 56.4097L69.9397 57.3009L77.0934 87.2909L50.7819 71.2199L50 70.7423L49.2181 71.2199L22.9066 87.2909L30.0603 57.3009L30.2729 56.4097L29.5771 55.8137L6.16194 35.7561L36.8947 33.2923L37.808 33.2191L38.1598 32.3732L50 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M200 3.90594L211.84 32.3732L212.192 33.2191L213.105 33.2923L243.838 35.7561L220.423 55.8137L219.727 56.4097L219.94 57.3009L227.093 87.2909L200.782 71.2199L200 70.7423L199.218 71.2199L172.907 87.2909L180.06 57.3009L180.273 56.4097L179.577 55.8137L156.162 35.7561L186.895 33.2923L187.808 33.2191L188.16 32.3732L200 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M350 3.90594L361.84 32.3732L362.192 33.2191L363.105 33.2923L393.838 35.7561L370.423 55.8137L369.727 56.4097L369.94 57.3009L377.093 87.2909L350.782 71.2199L350 70.7423L349.218 71.2199L322.907 87.2909L330.06 57.3009L330.273 56.4097L329.577 55.8137L306.162 35.7561L336.895 33.2923L337.808 33.2191L338.16 32.3732L350 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M500 3.90594L511.84 32.3732L512.192 33.2191L513.105 33.2923L543.838 35.7561L520.423 55.8137L519.727 56.4097L519.94 57.3009L527.093 87.2909L500.782 71.2199L500 70.7423L499.218 71.2199L472.907 87.2909L480.06 57.3009L480.273 56.4097L479.577 55.8137L456.162 35.7561L486.895 33.2923L487.808 33.2191L488.16 32.3732L500 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M650 0L663.225 31.7971L697.553 34.5491L671.399 56.9529L679.389 90.4509L650 72.5L620.611 90.4509L628.601 56.9529L602.447 34.5491L636.775 31.7971L650 0Z" fill="#D4D4D4"/>
        </svg>
        :
        (det.rating===5)?<svg width="700" height="100" viewBox="0 0 700 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 3.90594L61.8402 32.3732L62.192 33.2191L63.1053 33.2923L93.8381 35.7561L70.4229 55.8137L69.7271 56.4097L69.9397 57.3009L77.0934 87.2909L50.7819 71.2199L50 70.7423L49.2181 71.2199L22.9066 87.2909L30.0603 57.3009L30.2729 56.4097L29.5771 55.8137L6.16194 35.7561L36.8947 33.2923L37.808 33.2191L38.1598 32.3732L50 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M200 3.90594L211.84 32.3732L212.192 33.2191L213.105 33.2923L243.838 35.7561L220.423 55.8137L219.727 56.4097L219.94 57.3009L227.093 87.2909L200.782 71.2199L200 70.7423L199.218 71.2199L172.907 87.2909L180.06 57.3009L180.273 56.4097L179.577 55.8137L156.162 35.7561L186.895 33.2923L187.808 33.2191L188.16 32.3732L200 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M350 3.90594L361.84 32.3732L362.192 33.2191L363.105 33.2923L393.838 35.7561L370.423 55.8137L369.727 56.4097L369.94 57.3009L377.093 87.2909L350.782 71.2199L350 70.7423L349.218 71.2199L322.907 87.2909L330.06 57.3009L330.273 56.4097L329.577 55.8137L306.162 35.7561L336.895 33.2923L337.808 33.2191L338.16 32.3732L350 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M500 3.90594L511.84 32.3732L512.192 33.2191L513.105 33.2923L543.838 35.7561L520.423 55.8137L519.727 56.4097L519.94 57.3009L527.093 87.2909L500.782 71.2199L500 70.7423L499.218 71.2199L472.907 87.2909L480.06 57.3009L480.273 56.4097L479.577 55.8137L456.162 35.7561L486.895 33.2923L487.808 33.2191L488.16 32.3732L500 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        <path d="M650 3.90594L661.84 32.3732L662.192 33.2191L663.105 33.2923L693.838 35.7561L670.423 55.8137L669.727 56.4097L669.94 57.3009L677.093 87.2909L650.782 71.2199L650 70.7423L649.218 71.2199L622.907 87.2909L630.06 57.3009L630.273 56.4097L629.577 55.8137L606.162 35.7561L636.895 33.2923L637.808 33.2191L638.16 32.3732L650 3.90594Z" fill="#F1C644" stroke="#F1C644" stroke-width="3"/>
        </svg>
        :<svg width="698" height="100" viewBox="0 0 698 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48 3.90594L59.8402 32.3732L60.192 33.2191L61.1053 33.2923L91.838 35.7561L68.4229 55.8137L67.7271 56.4097L67.9397 57.3009L75.0934 87.2909L48.7819 71.2199L48 70.7423L47.2181 71.2199L20.9066 87.2909L28.0603 57.3009L28.2728 56.4097L27.577 55.8137L4.16191 35.7561L34.8947 33.2923L35.8079 33.2191L36.1598 32.3732L48 3.90594Z" fill="#D4D4D4" stroke="#D4D4D4" stroke-width="3"/>
        <path d="M198 0L211.225 31.7971L245.553 34.5491L219.399 56.9529L227.389 90.4509L198 72.5L168.611 90.4509L176.601 56.9529L150.447 34.5491L184.775 31.7971L198 0Z" fill="#D4D4D4"/>
        <path d="M348 0L361.225 31.7971L395.553 34.5491L369.399 56.9529L377.389 90.4509L348 72.5L318.611 90.4509L326.601 56.9529L300.447 34.5491L334.775 31.7971L348 0Z" fill="#D4D4D4"/>
        <path d="M498 0L511.225 31.7971L545.553 34.5491L519.399 56.9529L527.389 90.4509L498 72.5L468.611 90.4509L476.601 56.9529L450.447 34.5491L484.775 31.7971L498 0Z" fill="#D4D4D4"/>
        <path d="M648 0L661.225 31.7971L695.553 34.5491L669.399 56.9529L677.389 90.4509L648 72.5L618.611 90.4509L626.601 56.9529L600.447 34.5491L634.775 31.7971L648 0Z" fill="#D4D4D4"/>
        </svg>
        
      }
      </p>        
     
      <p>{det.comment}</p>
      </div>
     
      </div>
  );
})}
         
          </div>
         
        
        </section>
      )}
      <h5>Write your Review</h5>
      <section className="__write-review-container">
        <form className="__review-form" onSubmit={submitHandler}>
          <div className="__review-info">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              value={reviewer}
              onChange={(e) => setReviewer(e.target.value)}
            />
            <label htmlFor="rating">Rating: </label>
            <div className="__rating-star">
           

              <div className="__rating">
              <svg width="96" height="91" viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 0L61.2252 31.7971L95.5528 34.5491L69.3988 56.9529L77.3893 90.4509L48 72.5L18.6107 90.4509L26.6012 56.9529L0.447174 34.5491L34.7748 31.7971L48 0Z" fill="#D4D4D4"/>
</svg>
              <input type="radio" name="rate" id="1" 
              value={1}
              onChange={(e) => setRating(e.target.value)}/>
              <label htmlFor="1-star">1</label>
              </div>
              <div className="__rating">
              <svg width="96" height="91" viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 0L61.2252 31.7971L95.5528 34.5491L69.3988 56.9529L77.3893 90.4509L48 72.5L18.6107 90.4509L26.6012 56.9529L0.447174 34.5491L34.7748 31.7971L48 0Z" fill="#D4D4D4"/>
</svg>
              <input type="radio" name="rate" id="2" 
              value={2}
              onChange={(e) => setRating(e.target.value)}/>
              <label htmlFor="2-star">2</label>
              </div>

              <div className="__rating">
              <svg width="96" height="91" viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 0L61.2252 31.7971L95.5528 34.5491L69.3988 56.9529L77.3893 90.4509L48 72.5L18.6107 90.4509L26.6012 56.9529L0.447174 34.5491L34.7748 31.7971L48 0Z" fill="#D4D4D4"/>
</svg>
              <input type="radio" name="rate" id="3" 
              value={3}
              onChange={(e) => setRating(e.target.value)}/>
              <label htmlFor="3-star">3</label>
              </div>

              <div className="__rating">
              <svg width="96" height="91" viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 0L61.2252 31.7971L95.5528 34.5491L69.3988 56.9529L77.3893 90.4509L48 72.5L18.6107 90.4509L26.6012 56.9529L0.447174 34.5491L34.7748 31.7971L48 0Z" fill="#D4D4D4"/>
</svg>
              <input type="radio" name="rate" id="4" 
              value={4}
              onChange={(e) => setRating(e.target.value)}/>
              <label htmlFor="4-star">4</label>
              </div>

              <div className="__rating">
              <svg width="96" height="91" viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 0L61.2252 31.7971L95.5528 34.5491L69.3988 56.9529L77.3893 90.4509L48 72.5L18.6107 90.4509L26.6012 56.9529L0.447174 34.5491L34.7748 31.7971L48 0Z" fill="#D4D4D4"/>
</svg>
              <input type="radio" name="rate" id="5" 
              value={5}
              onChange={(e) => setRating(e.target.value)}/>
              <label htmlFor="3-star">5</label>
              </div>
            </div>
          </div>
          <div className="__review-info">
            <label htmlFor="review">Write review</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          <button type="submit" className="__view-btn">Submit</button>
          </div>
          {/* onSubmit={submitHandler} */}
        </form>
      </section>
    </div>
  );
};

export default BookDescription;
