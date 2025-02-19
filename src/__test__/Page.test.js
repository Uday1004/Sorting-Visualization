import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import LandignPage from "../Landing Page/Page";


// the test is to check if the landing page is render correctly
test("Landingpage is render correctly", () => {
    render(<LandignPage />);
    const elements = screen.getAllByText(/Sorting Visualization/i);
    expect(elements[1]).toBeInTheDocument();
});


// the test is to check if the generate dataset button is render correctly
test("When user click generate dataset then the with the dataset the sorting chart compeontn is shown", async () => {
    render(<LandignPage />);
    const generatebutton = screen.getByRole('button', { name: /Generate Dataset/i });
    userEvent.click(generatebutton);

    const chartElement = await screen.findByTestId("sorting-chart");
    expect(chartElement).toBeInTheDocument();

});



// the test is to check if the generate dataset button is render correctly
test("Clicking 'Start' initiates the sorting process and sorts the bar chart", async () => {
    render(<LandignPage />);
    const startButton = screen.getByRole('button', { name: /Start/i });
    expect(startButton).toBeInTheDocument();
});


