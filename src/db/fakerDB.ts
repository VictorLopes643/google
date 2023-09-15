import { AnimalModule, faker } from "@faker-js/faker";

const generateFakeData = () => {
  const getImage = () => faker.image.animals(644, 362, true);
  const getType = () => faker.animal.type();
  const getUrl = () => faker.internet.url();
  const getText = () => faker.lorem.sentences();
  const getTitle = () => faker.lorem.lines({ max: 1, min: 1 });

  const data = [...Array(100)].map((_, index) => {
    return {
      type: getType(),
      id: index + 1,
      url: getUrl(),
      title: getTitle(),
      description: getText(),
      image: getImage(),
    };
  });

  return data;
};

const fakeDatabase = generateFakeData();

export default fakeDatabase;
