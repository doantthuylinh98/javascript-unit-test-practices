import { statisticWords } from './11-string-02-statisticWords';

describe('statisticWords() count word in a string and return object', () => {
  it('should return {} if str === ""', () => {
    expect(statisticWords('')).toEqual({});
  });
  it('should return correct count when there is no redundant space', () => {
    expect(statisticWords('easy frontend with hau nguyen is easy')).toEqual({
      easy: 2,
      frontend: 1,
      with: 1,
      hau: 1,
      nguyen: 1,
      is: 1,
    });
  });
  it('should return correct count when there is redundant space', () => {
    expect(
      statisticWords('easy        frontend    with   hau nguyen    is    easy')
    ).toEqual({
      easy: 2,
      frontend: 1,
      with: 1,
      hau: 1,
      nguyen: 1,
      is: 1,
    });
  });
});
