import { useEffect, useState } from 'react';

const texts = [
  "Merhaba, ben Hüseyin!",
  "Full Stack Web Developer",
  "PHP & CodeIgniter Uzmanı",
  "Bu siteyi React ile yaptım.",
  "Python ile Veri Analizi yapıyorum",
  "MVC mimarisi ile çalışıyorum",
  "Git versiyon kontrolü kullanıyorum",
  "Modern web teknolojilerini takip ediyorum",
  "Sürekli öğrenmeye ve gelişmeye açığım"
];

export default function TypingEffect() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      let updatedText = '';
      if (isDeleting) {
        updatedText = currentText.substring(0, charIndex - 1);
        setCharIndex(prev => prev - 1);
      } else {
        updatedText = currentText.substring(0, charIndex + 1);
        setCharIndex(prev => prev + 1);
      }

      setDisplayText(updatedText);

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <>
      {displayText}
      <span className="cursor">|</span>
    </>
  );
}