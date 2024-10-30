import Btn from "./button";

const Card = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl py-6">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
              Products
            </h1>
            <p className="mt-4 text-lg text-black sm:text-xl">
              Cari product yang anda butuhkan dan silahkan contact kami untuk
              konsultasi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          <div className="card bg-base-100 image-full shadow-xl">
            <figure>
              <img src="udg.jpg" alt="undangan pernikahan" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Undangan pernikahan digital</h2>
              <p>
                Membuat undangan pernikahan digital berbasis website dan
                kemudahan akses oleh tamu.
              </p>
              <div className="card-actions justify-end">
                <Btn text="Order now" />
              </div>
            </div>
          </div>

          <div className="card bg-base-100 image-full shadow-xl">
            <figure>
              <img
                src="https://cdn.dribbble.com/userupload/11081777/file/original-45dbe8021eb8072e0477b602773e7d19.png?resize=752x"
                alt="Online shop / ecommerce"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Online shop / ecommerce</h2>
              <p>
                Full-stack online shop / ecomerce, (products, cart, account) dan
                feature lain.
              </p>
              <div className="card-actions justify-end">
                <Btn text="Order Now" />
              </div>
            </div>
          </div>

          <div className="card bg-base-100 image-full shadow-xl">
            <figure>
              <img
                src="https://cdn.dribbble.com/userupload/8973493/file/original-138918a921addade8fa3881afdba1c6f.png?resize=1024x768"
                alt="Backend Development"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Backend Development</h2>
              <p>Membuat feature sebagai seorang backend, (API, Server, Db).</p>
              <div className="card-actions justify-end">
                <Btn text="Order now" />
              </div>
            </div>
          </div>

          <div className="card bg-base-100 image-full shadow-xl">
            <figure>
              <img src="dg.jpg" alt="Social media specialist" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Social media specialist</h2>
              <p>
                Membuat konten digital, untuk meningkatkan brand awareness
                memperkuat usaha marketing, dan juga mendorong angka penjualan.
              </p>
              <div className="card-actions justify-end">
                <Btn text="Order now" />
              </div>
            </div>
          </div>

          <div className="card bg-base-100 image-full shadow-xl">
            <figure>
              <img src="Pm.png" alt="PM" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project Management</h2>
              <p>
                Perencanaan dan pengelolaan sumber daya untuk menyelesaikan
                sebuah proyek.
              </p>
              <div className="card-actions justify-end">
                <Btn text="Order now" />
              </div>
            </div>
          </div>

          <div className="card bg-base-100 image-full shadow-xl">
            <figure>
              <img src="dm.png" alt="digital marketing" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Digital marketing</h2>
              <p>Membuat sebuah website yang bisa membuat usaha meningkat.</p>
              <div className="card-actions justify-end">
                <Btn text="Order now" />
              </div>
            </div>
          </div>

          {/* end card */}
        </div>
      </div>
    </div>
  );
};

export default Card;
