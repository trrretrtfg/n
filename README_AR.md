# مشروع ذِكرى – React Native Native Android

هذه قاعدة مشروع React Native أصلية ولا تستخدم WebView. الواجهات الحالية شاشات Native أولية وليست تطبيقاً مكتملاً بعد.

## المتطلبات والإعداد
1. ضع ملف `google-services.json` الصحيح في جذر المشروع.
2. استبدل `REPLACE_WITH_YOUR_EAS_PROJECT_ID` بمعرّف مشروع EAS الحقيقي.
3. راجع `app.json` وتأكد من وجود ملفات الأيقونات المطلوبة إن أضفت مساراتها.
4. نفّذ `npm install`.
5. نفّذ `npx expo install --check` ثم `npx expo-doctor`.
6. لا تبدأ البناء إلا بعد معالجة أي تعارضات.

## البناء
`eas build --platform android --profile preview`

## ملاحظات مهمة
- لم يتم تضمين أي Service Account JSON أو مفاتيح خاصة.
- مفتاح Supabase الموجود هو publishable/anon key فقط؛ لا تضع service_role key داخل التطبيق.
- OneSignal يحتاج اختباراً فعلياً على build Android؛ لا تعتبر التهيئة وحدها دليلاً على وصول الإشعارات.
- شاشات الغرف والحساب والإشعارات حالياً واجهات تأسيسية، وتحتاج ربطاً بمخطط قاعدة البيانات وسياسات RLS وتدفقات المصادقة.
- اختيار الصور يفتح منتقي الصور الأصلي، لكن رفعها وتخزينها لم يُنفّذا بعد.
- هذا المشروع لا يحتوي على WebView.
