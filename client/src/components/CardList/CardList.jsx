import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row, Input } from 'antd';
import "./style.css"

const { Search } = Input;

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/cards');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="blog-area section-gap" id="blog">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Requirements to be Immigrants</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Search className='search' placeholder="Search by title" onChange={(e) => handleSearch(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cards no-border-card">
            <Row gutter={[20, 16]}>
              {filteredCards.map((card) => (
                <Col key={card._id} span={6}>
                  <img className="img-fluid-card" src={card.imageURL} alt={card.title} style={{ maxWidth: '100%' }} />
                  <p className="country">{card.country}</p>
                  <Card className="no-border-card" title={card.title} style={{ width: 280 }}>
                    <p>{card.description}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardList;
