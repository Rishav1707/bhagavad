import React, { useState } from 'react';
import '../styles/home.css'

const Home = () => {
  const [chapter, setChapter] = useState(1);
  const [verse, setVerse] = useState(1);
  const [verseText, setVerseText] = useState(
    "धृतराष्ट्र उवाच |\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||१-१||"
  );
  const [pronounciation, setPronounciation] = useState(
    "dhṛtarāṣṭra uvāca .\ndharmakṣetre kurukṣetre samavetā yuyutsavaḥ .\nmāmakāḥ pāṇḍavāścaiva kimakurvata sañjaya ||1-1||"
  );
  const [verseTranslation, setVerseTranslation] = useState(
    "1.1. Dhrtarastra said  O Sanjaya, what did my sons (and others) and Pandu's sons (and others) actually do when, eager for battle, they assembled on the sacred field, the Kuruksetra (Field of the Kurus)?"
  ); 


  function getVerse() {
    const url = `https://bhagavadgitaapi.in/slok/${chapter}/${verse}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVerseText(data.slok);
        setPronounciation(data.transliteration);
        setVerseTranslation(data.purohit.et);
      })
      .catch((err) => {
        alert("Verse not found");
        console.log(err);
      });
  }

  function nextVerse() {
    if (verse < 78) {
      setVerse(parseInt(verse) + 1);
    } else {
      setVerse(1);
      if (chapter < 18) {
        setChapter(parseInt(chapter) + 1);
      } else {
        setChapter(1);
      }
    }
    getVerse();
  }

  function prevVerse() {
    if (verse > 1) {
      setVerse(parseInt(verse) - 1);
    } else {
      setVerse(78);
      if (chapter > 1) {
        setChapter(parseInt(chapter) - 1);
      } else {
        setChapter(18);
      }
    }
    getVerse();
  }

  function randomVerse() {
    setChapter(Math.floor(Math.random() * 18) + 1);
    setVerse(Math.floor(Math.random() * 22) + 1);
    getVerse();
  }

  return (
    <section>
      <div className="container content-container">
        <div className="content">
          <h1>{verseText}</h1>
          <h2>{pronounciation}</h2>
          <h3>{verseTranslation}</h3>
        </div>
        <div className="controls">
          <div className="control">
            <span className="component">
              <label htmlFor="chapter">Chapter</label>
              <input
                type="number"
                name="chapter"
                id="chapter"
                value={chapter}
                min="1"
                max="18"
                onChange={(e) => setChapter(e.target.value)}
              />
            </span>

            <span className="component">
              <label htmlFor="verse">Verse</label>
              <input
                type="number"
                name="verse"
                id="verse"
                min="1"
                max="78"
                value={verse}
                onChange={(e) => setVerse(e.target.value)}
              />
            </span>
          </div>
          <br />
          <div className="buttons">
            <a onClick={prevVerse} className="btn" href="#0">
              Previous
            </a>
            <a onClick={getVerse} className="btn" href="#0">
              Get verse
            </a>
            <a onClick={randomVerse} className="btn" href="#0">
              Random
            </a>
            <a
              href={`https://bhagavadgitaapi.in/slok/${chapter}/${verse}/gita.svg`}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Get Svg
            </a>
            <a onClick={nextVerse} className="btn" href="#0">
              Next
            </a>
          </div>
          <code>
            (Bhagavad Gita, Chapter {chapter}, Shloka {verse})
          </code>
        </div>
      </div>
    </section>
  );
}

export default Home