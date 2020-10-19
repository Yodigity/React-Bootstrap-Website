import React, {useState, useEffect} from "react";
import { Image, Container, Col, Fade } from "react-bootstrap";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import images from "../Components/images";
import PageLayout from "../Components/PageLayout";

export const Home = () => {

  return (
    <PageLayout>
      <Container className='mt-2'>
        
        <SimpleReactLightbox>
          <Col>
            <SRLWrapper>
      
              {images.map((image, index) => {
                return(     
                  <a key={image.id} href={image.src} data-attribute='SRL'>
                    <Image
                      src={image.src}
                      alt={image.description}
                      width='200'
                      height='200'
                    />
                  </a>
                    )
                  
                  }
                )
              }
              
           
            </SRLWrapper>
          </Col>
        </SimpleReactLightbox>
       
      </Container>
    </PageLayout>
  );
};
