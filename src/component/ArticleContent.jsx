import React, { useEffect, useState } from 'react';
import axios from '../common/axios';
var Markdown = require('react-remarkable');

const fetchArticle = async (fileName, setContent) => {
    const res = await axios.get(`/blogContent.json?fileName=${fileName}`);
    
    setContent(res.data);
};

const getRawMarkup = (content) => {
    var md = new Remarkable();
    return { __html: md.render(content) };
  }


const ArticleContent = (props) => {
    const [content, setContent] = useState('');
    
    
    useEffect(() => {
        fetchArticle(props.title, setContent);
    }, []);
    
    return <div>
        <div
          className="content"
          dangerouslySetInnerHTML={getRawMarkup(content)} />
          </div>
};

export default ArticleContent;
