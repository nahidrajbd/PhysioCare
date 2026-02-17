import ProductCard from '../components/ProductCard';

// Import product images
import exerciseBandImage from '../assets/Products/exercise-resistance-band-sports-band.png';
import foldableBedImage from '../assets/Products/foldable-physiotherapy-exercise-bed.png';
import spineModelImage from '../assets/Products/full-spine-anatomical-model.png';
import kinesiologyTapeImage from '../assets/Products/kinesiology-sports-tape.png';
import kneeModelImage from '../assets/Products/knee-joint-anatomy-model.png';
import manualBedImage from '../assets/Products/manual-exercise-bed-ss-ms-frame.png';
import miniShockwaveImage from '../assets/Products/mini-shockwave-therapy-machine.png';
import miniSkeletonImage from '../assets/Products/mini-human-skeleton-model.png';
import irrStandImage from '../assets/Products/non-luminous-irr-stand-infrared-therapy-stand.png';
import rtmsImage from '../assets/Products/rtms-brain-therapy-machine.png';
import roboticHandImage from '../assets/Products/robotic-hand-exercise-trainer.png';
import shockwaveImage from '../assets/Products/shockwave-therapy-machine.png';
import shortwaveImage from '../assets/Products/shortwave-diathermy-therapy-machine.png';
import shoulderModelImage from '../assets/Products/shoulder-joint-anatomy-model.png';
import infraredStandImage from '../assets/Products/infrared-stand-275w-timer-regulator.png';
import tensEmsImage from '../assets/Products/taiwan-tens-ems-machine-ev-906.png';
import ultrasoundImage from '../assets/Products/ultrasound-therapy-machine.png';
import weightCuffImage from '../assets/Products/weight-cuff-ankle-wrist-weight.png';

const products = [
    {
        id: 1,
        name: "Exercise Resistance Band (Sports Band)",
        description: "Elastic resistance band ideal for strength training, stretching, and rehabilitation exercises, helping improve muscle strength, flexibility, and joint stability for all fitness levels.",
        image: exerciseBandImage
    },
    {
        id: 2,
        name: "Foldable Physiotherapy Exercise Bed",
        description: "Space-saving treatment bed designed for clinics and home visits, offering a sturdy, comfortable surface for manual therapy, exercise, and patient assessment.",
        image: foldableBedImage
    },
    {
        id: 3,
        name: "Full Spine Anatomical Model",
        description: "Life-size full spine model showing vertebrae, discs, and pelvis, perfect for teaching posture, spinal disorders, and treatment plans to patients and students.",
        image: spineModelImage
    },
    {
        id: 4,
        name: "Kinesiology Sports Tape",
        description: "Elastic kinesiology tape that supports muscles and joints without limiting movement, helps reduce pain, swelling, and speeds recovery during sports and daily activities.",
        image: kinesiologyTapeImage
    },
    {
        id: 5,
        name: "Knee Joint Anatomy Model",
        description: "Detailed knee joint model showing bones, ligaments, and cartilage, ideal for explaining injuries like ACL tears, osteoarthritis, and post-surgery rehab protocols.",
        image: kneeModelImage
    },
    {
        id: 6,
        name: "Manual Exercise Bed (SS & MS Frame)",
        description: "Durable manual exercise bed made with stainless steel and mild steel, designed for therapeutic exercises, stretching, and positioning in physiotherapy settings.",
        image: manualBedImage
    },
    {
        id: 7,
        name: "Mini Shockwave Therapy Machine",
        description: "Compact extracorporeal shockwave device used to relieve chronic muscle and tendon pain, promote tissue healing, and support faster recovery in sports and ortho rehab.",
        image: miniShockwaveImage
    },
    {
        id: 8,
        name: "Mini Human Skeleton Model",
        description: "Portable skeleton model with key bones and joints labeled, excellent for basic anatomical teaching, clinic demonstrations, and patient education.",
        image: miniSkeletonImage
    },
    {
        id: 9,
        name: "Non‑Luminous IRR Stand (Infrared Therapy Stand)",
        description: "Infrared therapy stand with non-luminous IR lamp head, used to provide deep heat for pain relief, muscle relaxation, and improved local blood circulation.",
        image: irrStandImage
    },
    {
        id: 10,
        name: "rTMS Brain Therapy Machine",
        description: "Repetitive Transcranial Magnetic Stimulation system designed to deliver non-invasive magnetic pulses to targeted brain areas, supporting treatment of neurological and psychiatric conditions under medical supervision.",
        image: rtmsImage
    },
    {
        id: 11,
        name: "Robotic Hand Exercise Trainer",
        description: "Rehabilitation robotic hand device that assists active and passive finger and hand movements, helping patients regain strength, coordination, and functional use after stroke or nerve injury.",
        image: roboticHandImage
    },
    {
        id: 12,
        name: "Shockwave Therapy Machine",
        description: "Professional ESWT shockwave unit for non-invasive treatment of plantar fasciitis, tendinopathy, and chronic musculoskeletal pain, enhancing blood flow and tissue regeneration.",
        image: shockwaveImage
    },
    {
        id: 13,
        name: "Shortwave Diathermy Therapy Machine",
        description: "Shortwave therapy device that delivers deep heat to muscles and joints, used to reduce pain, stiffness, and muscle spasm in physiotherapy and rehab clinics.",
        image: shortwaveImage
    },
    {
        id: 14,
        name: "Shoulder Joint Anatomy Model",
        description: "Anatomical shoulder model displaying humerus, scapula, clavicle, and key ligaments, ideal for explaining rotator cuff injuries, dislocations, and rehab plans to patients.",
        image: shoulderModelImage
    },
    {
        id: 15,
        name: "Infrared Stand 275W with Timer & Regulator",
        description: "Height-adjustable infrared stand with 275-watt bulb, built-in timer, and intensity regulator, providing controlled heat therapy for pain relief and muscle relaxation.",
        image: infraredStandImage
    },
    {
        id: 16,
        name: "Taiwan TENS + EMS Machine EV‑906",
        description: "Four-channel digital TENS/EMS unit from Taiwan that combines pain relief and muscle stimulation, with multiple preset programs for chronic pain, muscle strengthening, and post-injury rehab.",
        image: tensEmsImage
    },
    {
        id: 17,
        name: "Ultrasound Therapy Machine",
        description: "Therapeutic ultrasound device used to deliver deep tissue heating and micro-massage, helping reduce pain, inflammation, and promote soft tissue healing in physio practice.",
        image: ultrasoundImage
    },
    {
        id: 18,
        name: "Weight Cuff (Ankle/Wrist Weight)",
        description: "Adjustable weight cuff for ankle or wrist, used to add resistance during strengthening and gait training exercises, improving muscle power and endurance in rehab programs.",
        image: weightCuffImage
    }
];

const Products = () => {
    return (
        <div className="products-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Products</h1>
                    <p>Explore our wide range of physiotherapy equipment</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="products-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="catalog-note">
                        <p>Don't see what you're looking for?</p>
                        <p className="sub-note">We have a vast inventory. Contact us for specific requirements.</p>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .page-header {
          background-color: var(--bg-light);
          padding: 4rem 0;
          text-align: center;
          border-bottom: 1px solid #e2e8f0;
        }
        .page-header h1 {
          font-size: 3rem;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .page-header p {
          color: var(--secondary);
          font-size: 1.2rem;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .catalog-note {
          text-align: center;
          background: var(--primary-light);
          padding: 3rem;
          border-radius: var(--radius);
          border: 1px solid var(--primary-light);
        }
        .catalog-note p {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-dark);
        }
        .catalog-note .sub-note {
          font-size: 1rem;
          font-weight: 400;
          margin-top: 0.5rem;
        }
      `}</style>
        </div>
    );
};

export default Products;
