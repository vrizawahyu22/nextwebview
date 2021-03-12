import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  const [color, setColor] = useState('yellow');

  useEffect(() => {
    document.addEventListener("message", function(msg) {
      setColor(msg.data)
    }, false);
  }, []);

  const onPostMessage = () => {
    window.ReactNativeWebView.postMessage('MANTEPP BOYYY');
  } 

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={onPostMessage} style={{ backgroundColor: color }}>SEND MESSAGE MANTEP 1</button>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

// import React from 'react';
// import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';

// const data = [{
//   url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
//   id: '2121',
// }, {
//   url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
//   id: '2122',
// }];

// class App extends React.Component {
//   state = {
//     files: data,
//     multiple: false,
//   }
//   onChange = (files, type, index) => {
//     console.log(files, type, index);
//     this.setState({
//       files,
//     });
//   }
//   onSegChange = (e) => {
//     console.log("HALO");
//     window.postMessage("Hello React", "*");
//     const index = e.nativeEvent.selectedSegmentIndex;
//     this.setState({
//       multiple: index === 1,
//     });
//   }

//   render() {
//     const { files } = this.state;
//     return (
//       <WingBlank>
//         <SegmentedControl
//           values={['Halo', 'Coba']}
//           selectedIndex={this.state.multiple ? 1 : 0}
//           onChange={this.onSegChange}
//         />
//         <ImagePicker
//           files={files}
//           onChange={this.onChange}
//           onImageClick={(index, fs) => console.log(index, fs)}
//           selectable={files.length < 7}
//           multiple={this.state.multiple}
//         />
//       </WingBlank>
//     );
//   }
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import { firebaseCloudMessaging } from "../webPush";
// import firebase from 'firebase/app';

// function App() {
//   const [iniToken, setIniToken] = useState(null);
//   const [iniMessage, setIniMessage] = useState(null);

//   useEffect(() => {
//     setToken();
//     async function setToken() {
//       try {
//         const token = await firebaseCloudMessaging.init();
//         setIniToken(token);
//         if (token) {
//           getMessage();
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     function getMessage() {
//       const messaging = firebase.messaging();
//       console.log({ messaging });
//       messaging.onMessage((message) => {
//         // setIniMessage(message);
//         console.log("MASUK SINI DONG");
//         alert(title);
//         const { title, body } = JSON.parse(message.data.notification);
//         var options = {
//           body,
//         };
//         registration.showNotification(title, options);
//       });
//     }
//   });

//   return <div>{iniToken}, {iniMessage}</div>;
// }
// export default App;


// import { useRouter } from 'next/router'

// export default function Home() {
//   const router = useRouter()
//   const { id } = router.query

//   return (
//     <>
//       <a href={"intent://app/example/"+id+"#Intent;scheme=cquran;package=com.cquran;end"}>Continue to App</a>
//     </>
//   )
// }