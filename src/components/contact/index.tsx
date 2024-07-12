import React from 'react';

const ContactComp: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center  bg-gray-900 text-white p-8 ">
      <div className="md:w-1/2 ">
        <h2 className="text-center text-lg md:text-xl mb-6">أرسل لنا إستفسارك الآن وسيتم الرد عليك في أقرب وقت ممكن</h2>
        <form className="space-y-4 mr-5 ">
          <div className="flex flex-col md:flex-row md:space-x-4 rtl:text-end">
            <input type="text" placeholder="رقم الجوال*" className="bg-gray-800 p-3  flex-1 md:mb-0" required />
            <input type="text" placeholder="الاسم بالكامل*" className="bg-gray-800 p-3  flex-1 md:mb-0" required />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input type="email" placeholder="البريد الإلكتروني" className="bg-gray-800 p-3  flex-1 md:mb-0" />
            <input type="text" placeholder="المدينة" className="bg-gray-800 p-3  flex-1 md:mb-0" />
          </div>
          <textarea placeholder="نص الرسالة*" className="bg-gray-800 p-2  w-full" rows={5} required></textarea>
          <button type="submit" className="bg-yellow-700 text-white py-2 px-4  hover:bg-yellow-800">إرسال</button>
        </form>
      </div>
      <div className="md:w-1/4 bg-yellow-800 p-8 pr-5 text-right">
        <h3 className="text-lg mb-4">العنوان</h3>
        <p>الرياض، الياسمين، طريق أنس بن مالك، سكوير 35، الدور الأول مكتب VV</p>
        <h3 className="text-lg mt-6 mb-4">الجوال</h3>
        <p>+966570007708</p>
        <h3 className="text-lg mt-6 mb-4">البريد الإلكتروني</h3>
        <p>s@ebtkrat.com</p>
        <div className="mt-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactComp;
