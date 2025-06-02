import React, { useState, useEffect, useRef } from "react";

// Yardım komutları için biçimlendirme fonksiyonu
const formatHelpCommand = (cmd, desc) =>
  `<div><span class="text-success">${cmd}</span> - ${desc}</div>`;

const welcomeMessages = [
  "Terminal v5.3 başlatılıyor...",
  "Matrix bağlantısı kuruluyor...",
  "Sistem hazır.",
  "Merhaba! Ben Hüseyin'in iletişim terminaliyim.",
  "Mesajınızı yazabilirsiniz..."
];

const MatrixConsole = () => {
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Konsolu temizleme fonksiyonu
  const clearConsole = () => {
    setOutput([]);
  };

  // Matrix efekti örneği
  const showMatrixEffect = () => {
    const columns = 60;
    const lines = 10;
    const characters = "01";
    let line = 0;
  
    const generateMatrixLine = () => {
      let lineStr = "";
      for (let i = 0; i < columns; i++) {
        lineStr += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return lineStr;
    };
  
    const interval = setInterval(() => {
      if (line >= lines) {
        clearInterval(interval);
        return;
      }
  
      setOutput((prev) => [
        ...prev,
        {
          type: "matrix",
          text: generateMatrixLine(),
        },
      ]);
      line++;
    }, 100);
  };
  

  const commands = {
    hayatim: {
      type: "html",
      content: `
        <div class="love-message">
          <div class="heart">❤️</div>
          <div class="message">
            Benim hayatımın anlamı, kalbimin sahibi, her şeyim <strong>SEMANUR</strong>...<br>
            Seninle geçen her an, her nefes, her gülüş benim için çok değerli.<br>
            Seninle olduğum her an, hayatımın en güzel anları...<br>
            Seni çok seviyorum, her geçen gün daha da çok seviyorum...<br>
            Sen benim her şeyimsin, hayatımın anlamısın...<br>
            Seninle geçireceğimiz nice güzel günlere...<br>
            ❤️ Seni Seviyorum ❤️
          </div>
        </div>`
    },
    merhaba: {
      type: "text",
      content: "Merhaba! Size nasıl yardımcı olabilirim?"
    },
    yardım: {
      type: "html",
      content: `
        <div class="help-section">Kullanılabilir komutlar:</div>
        ${formatHelpCommand('merhaba', 'Selamlama')}
        ${formatHelpCommand('temizle', 'Konsolu temizle')}
        ${formatHelpCommand('matrix', 'Matrix efekti')}
        ${formatHelpCommand('hakkımda', 'Kişisel bilgiler')}
        ${formatHelpCommand('yetenekler', 'Teknik yetenekler')}
        ${formatHelpCommand('iletişim', 'İletişim bilgileri')}
        ${formatHelpCommand('projeler', 'Proje listesi')}
        ${formatHelpCommand('eğitim', 'Eğitim geçmişi')}
        ${formatHelpCommand('deneyim', 'İş deneyimi')}
        ${formatHelpCommand('sertifikalar', 'Sertifikalar')}
        ${formatHelpCommand('blog', 'Blog yazıları')}
        ${formatHelpCommand('sosyal', 'Sosyal medya')}
        ${formatHelpCommand('hayatim', 'Sevgilime özel mesaj')}
      `
    },
    temizle: {
      type: "function",
      action: () => {
        clearConsole();
        return "";
      }
    },
    matrix: {
      type: "function",
      action: () => {
        showMatrixEffect();
        return "Matrix efekti başlatıldı...";
      }
    },
    hakkımda: {
      type: "text",
      content: "Ben Hüseyin Şeker, Full Stack Web Developer olarak çalışıyorum. PHP, CodeIgniter, JavaScript ve React teknolojilerinde uzmanım. Modern web teknolojilerini kullanarak yenilikçi çözümler üretmeyi hedefliyorum."
    },
    yetenekler: {
      type: "text",
      content: `Yeteneklerim:\n- PHP & CodeIgniter\n- JavaScript & React\n- Python\n- MySQL & PostgreSQL\n- Git & GitHub\n- MVC Mimarisi\n- REST API\n- Docker\n- Linux\n- HTML5 & CSS3\n- Bootstrap & Tailwind CSS`
    },
    iletişim: {
      type: "text",
      content: `İletişim bilgilerim:\nE-posta: huseyinseker@outlook.com\nGitHub: github.com/huseyinseker\nLinkedIn: linkedin.com/in/huseyinsekerr`
    },
    projeler: {
      type: "text",
      content: `Projelerim:\n1. E-Ticaret Web Uygulaması (CodeIgniter)\n2. CRM Sistemi (PHP & MySQL)\n3. Veri Analizi Projesi (Python)\n4. React ile Web Uygulaması\n5. REST API Servisi`
    },
    eğitim: {
      type: "text",
      content: `Eğitim Geçmişim:\n- Atatürk Üniversitesi Bilgisayar Mühendisliği (2021-2025)`
    },
    deneyim: {
      type: "text",
      content: `Deneyimlerim:\n- Full Stack Web Developer (2025-Şimdi)\n- Web Geliştirme (3 yıl)\n- Veri Analizi (2 yıl)\n- Frontend Geliştirme (2 yıl)`
    },
    sertifikalar: {
      type: "text",
      content: `Sertifikalarım:\n- Web Geliştirme Sertifikası\n- Python for Data Science\n- React.js Sertifikası\n- Git & GitHub Sertifikası`
    },
    blog: {
      type: "text",
      content: `Blog yazılarım:\n- Web Geliştirme İpuçları\n- CodeIgniter ile MVC\n- React.js Öğreticileri\n- Python ile Veri Analizi`
    },
    sosyal: {
      type: "text",
      content: `Sosyal Medya Hesaplarım:\n- GitHub: github.com/n11ce\n- LinkedIn: linkedin.com/in/huseyinsekerr`
    }
  };

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const showMessages = () => {
      if (index < welcomeMessages.length) {
        setOutput((prev) => [
          ...prev,
          { type: "response", text: welcomeMessages[index] }
        ]);
        index++;
        timeoutId = setTimeout(showMessages, 700);
      }
    };

    showMessages();

    return () => clearTimeout(timeoutId);
  }, []);

  const addMessage = (text, isCommand = true) => {
    setOutput((prev) => [
      ...prev,
      { type: isCommand ? "command" : "response", text }
    ]);
  };

  const handleCommand = (command) => {
    const key = command.toLowerCase();
    const cmd = commands[key];

    if (!cmd) {
      addMessage("Bu komut tanınmıyor. 'yardım' yazarak komutları görebilirsiniz.", false);
      return;
    }

    if (cmd.type === "function") {
      const result = cmd.action();
      if (result) addMessage(result, false);
    } else if (cmd.type === "html") {
      addMessage(<div dangerouslySetInnerHTML={{ __html: cmd.content }} />, false);
    } else {
      addMessage(cmd.content, false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input.trim()) {
        addMessage("$ " + input);
        handleCommand(input);
        setHistory((prev) => [...prev, input]);
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "ArrowUp") {
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="matrix-console">
      <div className="console-header">
        <span className="console-title">Terminal v5.3</span>
        <div className="console-controls">
          <span className="console-dot" />
          <span className="console-dot" />
          <span className="console-dot" />
        </div>
      </div>
      <div className="console-body" ref={containerRef}>
        <div id="console-output">
          {output.map((line, index) => (
            <div
              key={index}
              className={line.type === "command" ? "text-success" : "text-light"}
            >
              {typeof line.text === "string" ? line.text : line.text}
            </div>
          ))}
        </div>
        <div className="console-input-line">
          <span className="console-prompt">$</span>
          <input
            type="text"
            ref={inputRef}
            className="console-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Mesajınızı yazın..."
          />
        </div>
      </div>
    </div>
  );
};

export default MatrixConsole;
