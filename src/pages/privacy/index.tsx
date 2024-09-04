import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto mt-12 text-[#764095]">
      <h1 className="text-2xl font-bold mb-4 text-right">سياسة الخصوصية</h1>
      <p className="text-right mb-4">
        نحن ملتزمون بحماية خصوصيتك وأمان بياناتك الشخصية. هذه السياسة توضح كيف
        نقوم بجمع واستخدام وحماية المعلومات التي نجمعها منك عندما تتفاعل مع
        موقعنا وخدماتنا.
      </p>

      <h2 className="text-xl font-bold mb-4 text-right">
        ما هي المعلومات التي نجمعها؟
      </h2>
      <p className="text-right mb-4">نحن نقوم بجمع المعلومات التالية:</p>
      <ul className="list-disc list-inside text-right mb-4">
        <li>معلومات شخصية: الاسم، عنوان البريد الإلكتروني، رقم الهاتف.</li>
        <li>
          معلومات الاستخدام: سجلات نشاطك على الموقع، مثل الصفحات التي تزورها،
          والروابط التي تنقر عليها، والوقت الذي تقضيه على موقعنا.
        </li>
        <li>معلومات الجهاز: نوع الجهاز، نظام التشغيل، المتصفح، وعنوان IP.</li>
      </ul>

      <h2 className="text-xl font-bold mb-4 text-right">
        لماذا نجمع هذه المعلومات؟
      </h2>
      <p className="text-right mb-4">
        نستخدم المعلومات التي نجمعها للأغراض التالية:
      </p>
      <ul className="list-disc list-inside text-right mb-4">
        <li>تخصيص تجربتك: لتقديم محتوى ملائم لاهتماماتك.</li>
        <li>تحسين خدماتنا: لفهم كيفية استخدامك لموقعنا وتحسين خدماتك.</li>
        <li>معالجة طلباتك: لتلبية طلباتك والامتثال للقوانين.</li>
        <li>
          الاتصال بك: لإرسال تأكيد الطلبات وتحديثات الخدمة والعروض الترويجية
          (بشروط موافقتك).
        </li>
      </ul>

      <h2 className="text-xl font-bold mb-4 text-right">كيف نحمي معلوماتك؟</h2>
      <p className="text-right mb-4">
        نحن نتخذ إجراءات صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به،
        والتعديل، والكشف، والتدمير. هذه الإجراءات تشمل:
      </p>
      <ul className="list-disc list-inside text-right mb-4">
        <li>التشفير: استخدام التشفير لحماية المعلومات الحساسة.</li>
        <li>الجدران النارية: حماية شبكتنا من التهديدات الخارجية.</li>
        <li>
          مراقبة الوصول: التحقق من الوصول إلى بياناتك لموظفين الذين يحتاجون
          إليها لأداء وظائفهم.
        </li>
      </ul>

      <h2 className="text-xl font-bold mb-4 text-right">مشاركة المعلومات</h2>
      <p className="text-right mb-4">
        نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك بياناتك مع:
      </p>
      <ul className="list-disc list-inside text-right mb-4">
        <li>
          مزودي الخدمات: مثل شركات الاستضافة والتحليلات، لمساعدتنا في تشغيل
          موقعنا.
        </li>
        <li>الشركاء: لتمكين المنتجات أو الخدمات التي تطلبها.</li>
        <li>الجهات الحكومية: إذا كان ذلك مطلوباً قانونياً.</li>
      </ul>

      <h2 className="text-xl font-bold mb-4 text-right">حقوقك</h2>
      <p className="text-right mb-4">لديك الحق في:</p>
      <ul className="list-disc list-inside text-right mb-4">
        <li>الوصول إلى بياناتك: طلب نسخة من البيانات التي نحتفظ بها عنك.</li>
        <li>تصحيح البيانات: طلب تصحيح أي بيانات غير دقيقة.</li>
        <li>حذف البيانات: طلب حذف بياناتك الشخصية.</li>
        <li>رفض التسويق: إلغاء الاشتراك في رسائل التسويق في أي وقت.</li>
      </ul>
      <h1 className="text-2xl font-bold mb-4 text-right">
        ملفات تعريف الارتباط (Cookies):{" "}
      </h1>
      <p className="text-right mb-4">
        نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم. يمكنك تعطيل ملفات
        تعريف الارتباط من خلال إعدادات متصفحك، ولكن هذا قد يؤثر على وظائف بعض
        أجزاء من موقعنا.
      </p>

      <h1 className="text-2xl font-bold mb-4 text-right">
        {" "}
        التغييرات على سياسة الخصوصية:{" "}
      </h1>
      <p className="text-right mb-4">
        نحتفظ بالحق في تعديل هذه السياسة في أي وقت. سنقوم بنشر أي تغييرات على
        هذه الصفحة.
      </p>
      <h1 className="text-2xl font-bold mb-4 text-right"> اتصل بنا: </h1>
      <p className="text-right mb-4">
        إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى الاتصال بنا على
        info@zahw-sa.com.
      </p>
    </div>
  );
};

export default Privacy;
