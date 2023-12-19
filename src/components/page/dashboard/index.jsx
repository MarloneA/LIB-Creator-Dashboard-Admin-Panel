import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Client from './client';



export default function Dashboard({supabase}) {
  
  const [currentUserCards, setcurrentUserCards] = useState([])

  const navigate = useNavigate();
  let currentUser = localStorage.getItem('user');
  let currentPlan = localStorage.getItem('plan');

    useEffect(() => {
      getCardDetails();
    }, []);

    async function getCardDetails() {
      const { data: CardDetails  } =  await supabase.from('CardDetails').select('*').eq('userid', currentUser);
      setcurrentUserCards(CardDetails);
    }

  const setPlan = (plan) => {
    updateItem(plan, currentUser);
    localStorage.setItem("plan", plan)
    navigate(`../../profile/${currentUser}/dashboard`)
  }

  const updateItem = async ({ pricing, id }) => {
    const { data, error } = await supabase
      .from('CardDetails')
      .update({ pricing })
      .eq('userid', id)
      .select()
  };

  if (!currentPlan || ["auth"].includes(currentPlan)) {
    return (
      <section id="price-page" className="pricing">
          <div className="pricingContainer">
            <h1>Choose a plan that works for you</h1>
            <div className="priceList">
              <div className="pricingCard">
                <p>Free Plan</p>
                <h4>$0.0</h4>
                <div className="priceplan">
                  <h5>Major 3 links:</h5>
                  <h5>(Whatsapp, Instagram, Linkedin)</h5>
                  <h5>Profile Photo</h5>
                  <h5>Link NFC Banner</h5>
                  <h5>Link NFC Ad</h5>
                  <h5>when card </h5>
                  <h5>is scanned</h5>
                </div>

                <button onClick={() => setPlan("free")} className="sign-up-btn">Get Card</button>

              </div>
  
              <div className="pricingCard">
                <p>Basic Plan</p>
                <h4>$0.0</h4>
                <div className="priceplan">
                  <h5>Customized Card</h5>
                  <h5>with Watermark</h5>
                  <h5>2 profiles</h5>
                  <h5>Profile Photo</h5>
                  <h5>Custom Banner</h5>
                  <h5>Multiple Links</h5>
                  <h5>No Ads</h5>
                </div>
                <button onClick={() => setPlan("basic")} className="sign-up-btn">Get Card</button>
              </div>
  
              <div className="pricingCard">
                <p>Premium Plan</p>
                <h4>$0.0</h4>
                <div className="priceplan">
                  <h5>Customized Card</h5>
                  <h5>No Water Mark</h5>
                  <h5>5 profiles</h5>
                  <h5>Profile Photo</h5>
                  <h5>Custom Banner</h5>
                  <h5>Multiple Links</h5>
                  <h5>No Ads</h5>
                </div>
                  <button onClick={() => setPlan("premium")} className="sign-up-btn">Get Card</button>
              </div>
            </div>
          </div>
      </section>
    );
  }

  return <Client supabase={supabase} currentUserCards={currentUserCards} />

}
