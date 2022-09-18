import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  const someFunction = () => {
    let output = document.getElementById('content').value;
    output = output.replace(/\s/g, '');
    let outputForFunctions = output
      .replace(/function/, 'function ')
      .replace(/var/, 'var ')
      .replace(/let/, 'let ')
      .replace(/const/, 'const ')
      .replace(/type/, ' type')
      .replace(/value/, ' value')
      .replace(/onclick/, ' onclick')
      .replace(/id/, ' id')
      .replace(/class/, ' class')
      .replace(/rows/, ' rows')
      .replace(/cols/, ' cols')
      .replace(/divid/, ' div id')
      .replace(')', ');')
      .replace(') {', '){')
      .replace('){', '){')
      .replace(');{', '){')
      .replace(/translate/, ' translate');

    document.getElementById('contentMinified').value = outputForFunctions;
  };

  const copyMinifiedCode = () => {
    let output = document.getElementById('contentMinified');
    // Select the text field
    output.select();
    output.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(output.value);

    // Alert the copied text
    let tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = 'Copied';
  };

  const displayTooltip = () => {
    let tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = 'Copy to clipboard';
  };
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <meta name='author' content='Martínval11' />
        <title>HTML and JS Minifier</title>
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Minifier Prototype.' />
        <meta
          name='keywords'
          content='Minify, MinifyJS, MinifyHTML, Minifier'
        />
      </Head>
      <h1>HTML and JS Minifier</h1>
      <form>
        <textarea
          name=''
          id='content'
          cols='30'
          rows='10'
          placeholder='Your Code...'
          autoFocus></textarea>
        <textarea
          name=''
          id='contentMinified'
          cols='30'
          rows='10'
          placeholder='The Minified Code will be place here...'></textarea>
        <br />
        <input
          type='button'
          value='Minify Code'
          onClick={() => someFunction()}
        />
        <div className='tooltip'>
          <button
            type='button'
            value='Copy Minified Code'
            onClick={() => copyMinifiedCode()}
            onMouseOut={() => displayTooltip()}>
            <span className='tooltiptext' id='myTooltip'>
              Copy to clipboard
            </span>
            Copy Minified Code
          </button>
        </div>
      </form>
    </>
  );
};

export default Home;
