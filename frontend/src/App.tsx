interface Option {
  title: string;
}

interface Item {
  question: string,
  isMultiple?: boolean,
  options: Option[]
}


interface Quiz {
  headline: string,
  items: Item[]
}

const testQuiz: Quiz = {
  headline: 'How well do you know JS?',
  items: [
    {
      question: 'Is JS using in Backend?',
      options: [{
        title: 'Yes'
      },
      {
        title: 'No'
      },
      {
        title: 'Maybe yes, maybe no'
      }]
    }
  ]
}

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
