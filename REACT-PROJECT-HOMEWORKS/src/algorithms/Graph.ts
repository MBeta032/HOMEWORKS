import type ICity from "../interfaces/ICity";
import type IPerson from "../interfaces/IPerson";

export type GraphNode = IPerson | ICity;

export default class Graph {
  public people: IPerson[];
  public cities: ICity[];
  public adjList: Map<GraphNode, GraphNode[]>;

  constructor() {
    this.people = [];
    this.cities = [];
    this.adjList = new Map();
  }

  addCity(city: ICity) {
    const cityExists = this.cities.some(
      (currentCity) => currentCity.id === city.id
    );

    if (cityExists) return;

    this.cities.push(city);
    this.adjList.set(city, []);
  }

  addPerson(person: IPerson, city: ICity) {
    const personExists = this.people.some(
      (currentPerson) => currentPerson.name === person.name
    );

    if (personExists) return;

    const cityExists = this.cities.find(
      (currentCity) => currentCity.id === city.id
    );

    if (!cityExists) return;

    this.people.push(person);
    this.adjList.set(person, []);

    this.addEdge(person, cityExists);
  }

  private addEdge(node1: GraphNode, node2: GraphNode) {
    const node1Adjacency = this.adjList.get(node1);
    const node2Adjacency = this.adjList.get(node2);

    if (!node1Adjacency || !node2Adjacency) return;

    node1Adjacency.push(node2);
    node2Adjacency.push(node1);
  }

  private searchNode(node: GraphNode) {
    return this.people.includes(node as IPerson) || this.cities.includes(node as ICity);
  }

  searchCity(cityName: string) {
    return this.cities.find((city) => city.name === cityName);
  }

  getAdjacencyList(node: GraphNode) {
    if (!this.searchNode(node)) return [];

    return this.adjList.get(node) || [];
  }

  getPeopleByCity(cityName: string) {
    const city = this.searchCity(cityName);

    if (!city) return [];

    const adjacencyList = this.getAdjacencyList(city);

    return adjacencyList.filter((node) =>
      this.people.includes(node as IPerson)
    ) as IPerson[];
  }

  printGraph() {
    console.log(this.adjList);
    return this.adjList;
  }
}