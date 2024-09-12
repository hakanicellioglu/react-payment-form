import React, { Component } from 'react';
import './planlist.css';

class PlanList extends Component {
    state = {
        planList: [
            {
                id: 1,
                title: "Pay Monthly",
                amount: 20,
            },
            {
                id: 2,
                title: "Pay Annual",
                amount: 16,
                save: 15,
            },
        ],
        selectedPlanId: 1, // Varsayılan olarak ilk plan seçili
    };

    handlePlanChange = (event) => {
        this.setState({ selectedPlanId: parseInt(event.target.value) });
    };

    getTotalAmount = () => {
        const selectedPlan = this.state.planList.find(plan => plan.id === this.state.selectedPlanId);
        return selectedPlan ? selectedPlan.amount : 0;
    };

    render() {
        const totalAmount = this.getTotalAmount();

        return (
            <div className="plan">
                <h2>Starter Plan</h2>

                <div className="container">
                    {this.state.planList.map((plan) => (
                        <div key={plan.id} className="plan-card">
                            <div>
                                <input
                                    type="radio"
                                    id={`plan-${plan.id}`}
                                    name="plan"
                                    value={plan.id}
                                    checked={this.state.selectedPlanId === plan.id}
                                    onChange={this.handlePlanChange}
                                />
                                <label htmlFor={`plan-${plan.id}`}>{plan.title}</label>
                            </div>
                            <div className="amount">
                                <h3>Amount: ${plan.amount}</h3>
                                {plan.save && <p className="save">Save: {plan.save}%</p>}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="divider"></div>
                <div className="total">
                    <h1>Total</h1>
                    <h3>${totalAmount}/Month</h3>
                </div>

                <p className="description">Guaranteed to be safe & secure, ensuring that all transactions are protected with the highest level of security.</p>
            </div>
        );
    }
}

export default PlanList;
