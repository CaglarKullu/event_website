import React from 'react';

interface CustomListProps {
    color: string;
    text: string;
  }
  
  const CustomList: React.FC<CustomListProps> = ({ color, text }) => {
    return (
      <ul>
        <li className={`text-${color}`}>{text}</li>
        <li>b</li>
      </ul>
    );
  }
  
  interface CustomListGeneratorProps {
    color: string;
    texts: string[];
  }
  
  const CustomListGenerator: React.FC<CustomListGeneratorProps> = ({ color, texts }) => {
    return (
      <>
        {texts.map((text, idx) => (
          <CustomList key={idx} color={color} text={text} />
        ))}
      </>
    );
  }
  
  export { CustomList, CustomListGenerator };