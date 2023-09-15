import { AnimalModule, faker } from "@faker-js/faker";

const generateFakeData = () => {
  const getImage = () => faker.image.animals(644, 362, true);
  const getType = () => faker.animal.type();
  const getUrl = () => faker.internet.url();
  const getText = () => faker.lorem.sentences();
  const getTitle = (type) => faker.animal[type]();

  const data = [...Array(300)].map((_, index) => {
    const type = getType();
    return {
      type,
      id: index + 1,
      url: getUrl(),
      title: getTitle(type),
      description: getText(),
      image: getImage(),
    };
  });

  return data;
};

const fakeDatabase = generateFakeData();

export default fakeDatabase;
